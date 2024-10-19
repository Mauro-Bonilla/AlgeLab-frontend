// src/utils/markdownParser.js
export const parseMarkdownContent = (content) => {
    console.log('Raw content:', content);
    const titleRegex = /^#\s(.+)$/m;
    const quizRegex = /---quiz---([\s\S]*?)---end quiz---/;
  
    const titleMatch = content.match(titleRegex);
    const title = titleMatch ? titleMatch[1] : '';
  
    const quizMatch = content.match(quizRegex);
  
    let markdown = content;
    let quiz = null;
  
    if (quizMatch) {
      const quizContent = quizMatch[1];
      markdown = content.replace(quizRegex, '').trim();
      try {
        quiz = JSON.parse(quizContent);
      } catch (error) {
        console.error('Error parsing quiz data:', error);
      }
    }
  
    // Remove the title from the markdown content
    markdown = markdown.replace(titleRegex, '').trim();
  
    console.log('Parsed content:', { title, markdown, quiz });
    return { title, markdown, quiz };
  };
  