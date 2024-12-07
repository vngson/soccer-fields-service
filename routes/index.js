const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Lấy lời chào
 *     description: Trả về lời chào từ server.
 *     responses:
 *       200:
 *         description: Thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, world!"
 */
router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router;
