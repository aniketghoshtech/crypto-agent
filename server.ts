import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  // AI Mentor Chat Endpoint
  app.post('/api/ai-mentor', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message string is required.' });
      }

      if (!ai) {
        // Fallback response if API key is not configured yet
        return res.json({
          reply: `Hello! I'm Adriana's AI Strategy Assistant. To receive personalized 1-on-1 crypto strategy feedback powered by real-time AI analysis, please ensure your GEMINI_API_KEY is set in settings.\n\nIn the meantime, Adriana recommends: Always maintain strict 1-2% position sizing and never trade without a defined Stop-Loss!`
        });
      }

      const systemInstruction = `You are the AI Strategy Assistant for Adriana McGrath, a certified cryptocurrency trading mentor with 9+ years experience. 
You advise users professionally on technical analysis, risk management, crypto portfolio allocation, spot vs futures strategy, and discipline.
Keep replies concise (2-4 bullet points or short paragraphs), professional, actionable, and encouraging. Always remind users that trading carries risk and to use proper stop-loss parameters. Do NOT give financial guarantees.`;

      const contents = [];
      if (history && Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.content }]
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "I'm currently processing market volatility. Please ask again!";
      res.json({ reply });

    } catch (err: any) {
      console.error('Gemini API error:', err);
      res.status(500).json({ 
        error: 'Error generating mentor response.',
        details: err?.message || 'Internal server error'
      });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite middleware in dev mode, static files in production mode
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
