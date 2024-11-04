export const parseMarkdownContent = (content) => {
  console.log('Raw content:', content);
  const titleRegex = /^#\s(.+)$/m;
  const quizRegex = /---quiz---([\s\S]*?)---end quiz---/;
  const labRegex = /---lab---([\s\S]*?)---end lab---/;

  const titleMatch = content.match(titleRegex);
  const title = titleMatch ? titleMatch[1] : '';

  const quizMatch = content.match(quizRegex);
  const labMatch = content.match(labRegex);

  let markdown = content;
  let quiz = null;
  let labUrl = null;

  if (labMatch) {
    labUrl = labMatch[1].trim();
    markdown = markdown.replace(labRegex, '').trim();
  }

  if (quizMatch) {
    const quizContent = quizMatch[1];
    markdown = markdown.replace(quizRegex, '').trim();
    try {
      quiz = JSON.parse(quizContent);
    } catch (error) {
      console.error('Error parsing quiz data:', error);
    }
  }