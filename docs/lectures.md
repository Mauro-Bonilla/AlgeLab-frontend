# Lecture Content Guide

This guide explains how to create and manage lectures in the AlgeLab platform.

## Table of Contents
- [Lesson Structure](#lesson-structure)
- [Lecture File Format](#lecture-file-format)
- [Content Components](#content-components)
- [Quiz Configuration](#quiz-configuration)
- [Lab Integration](#lab-integration)
- [Media Assets](#media-assets)

## Lesson Structure

Lessons are organized in a hierarchical structure:
```
public/docs/
├── lecture-0/           # Module 0
│   ├── lecture0.1.md
│   ├── lecture0.2.md
│   └── lecture0.3.md
└── lecture-1/           # Module 1
    ├── lecture1.1.md
    ├── lecture1.2.md
    └── lecture1.3.md
```

## Lecture File Format

Each lecture file (`*.md`) follows this structure:

```markdown
# Title of the Lecture

Content in Markdown format...

### Mathematical Expressions
Use LaTeX format with $ or $$:
$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$

### Images
![Alt text](/lectures-media/image-name.gif)

---quiz---
{
  "title": "Quiz Title",
  "questions": [
    {
      "id": "q1",
      "type": "single|multiple|matching",
      "text": "Question text",
      "options": ["Option 1", "Option 2"],
      "correctAnswer": "Option 1",
      "points": 100
    }
  ]
}
---end quiz---

---lab---
https://github.com/username/lab-repository.git
---end lab---
```

## Content Components

### Mathematical Expressions
```markdown
Inline math: $x^2 + y^2 = z^2$
Block math: 
$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$
```

### Media Integration
```markdown
# Images
![Description](/lectures-media/image.png)

# GIF Animations
![Animation](/lectures-media/animation.gif)
```

## Quiz Configuration

### Single Choice Question
```json
{
  "id": "q1",
  "type": "single",
  "text": "What is 2+2?",
  "options": ["3", "4", "5"],
  "correctAnswer": "4",
  "points": 100
}
```

### Multiple Choice Question
```json
{
  "id": "q2",
  "type": "multiple",
  "text": "Select all prime numbers:",
  "options": ["2", "3", "4", "5"],
  "correctAnswers": ["2", "3", "5"],
  "points": 100
}
```

### Matching Question
```json
{
  "id": "q3",
  "type": "matching",
  "text": "Match the items:",
  "pairs": [
    {
      "left": "1+1",
      "right": "2"
    },
    {
      "left": "2+2",
      "right": "4"
    }
  ],
  "points": 100
}
```

## Lab Integration

To add a GitHub Codespace lab:

1. Create a repository with your lab content
2. Add at the end of your lecture:
```markdown
---lab---
https://github.com/username/repository-name.git
---end lab---
```

### Lab Repository Requirements
- Include `.devcontainer` configuration
- Add requirements.txt or package.json
- Include README.md with instructions
- Set appropriate permissions

## Media Assets

Store media files in:
```
public/lectures-media/
```

Naming convention:
- Use lecture numbers: `lecture1.1.gif`
- Use descriptive names: `vector_addition.png`
- Support formats: png, jpg, gif, svg

## Development Guidelines

1. Each lecture should include:
   - Clear title
   - Content sections
   - Examples
   - Visual aids
   - Interactive elements
   - Quiz or assessment
   - Lab integration (when applicable)

2. File naming:
   - Module: `lecture-N/`
   - Files: `lectureN.M.md`
   - Where N is module number, M is lecture number

3. Content best practices:
   - Use clear headings
   - Include mathematical notation
   - Add visual examples
   - Provide interactive elements
   - End with assessment

## Troubleshooting

Common issues and solutions:

1. **Media not displaying**
   - Check path is relative to `/lectures-media/`
   - Verify file exists and permissions
   - Ensure correct file format

2. **Quiz not working**
   - Validate JSON format
   - Check question type is supported
   - Verify all required fields

3. **Lab integration issues**
   - Verify repository exists
   - Check repository permissions
   - Validate GitHub configuration

## Contact

For assistance with lecture creation:
- Discord: [Join our server](https://discord.gg/4SRmKVZb8V)
- Email: mauro.bonillaol@anahuac.mx