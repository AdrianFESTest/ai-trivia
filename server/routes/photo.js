import express from 'express';

const router = express.Router();

// TODO (Step 3): replace this stub with a real Gemini *vision* call.
// Right now it ignores the uploaded image and returns a sample question.
router.post('/', async (req, res) => {
  res.json({
    question: 'Sample question about your photo. Wire up Gemini vision in Step 3!',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 'Option A',
  });
});

export default router;
