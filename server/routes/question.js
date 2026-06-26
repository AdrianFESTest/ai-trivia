import express from 'express';

const router = express.Router();

// TODO (Step 2): replace this stub with a real Gemini call.
// Right now it ignores the topic and always returns the same sample
// question — just so the app runs end to end before we wire in the AI.
router.post('/', async (req, res) => {
  const { topic } = req.body;

  res.json({
    question: `Sample question about "${topic || 'anything'}". Wire up Gemini in Step 2!`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  });
});

export default router;
