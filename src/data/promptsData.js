const promptsData = [
  {
    id: 1,
    category: 'Code Generation',
    title: 'React Component Generator',
    prompt: `You are a senior React developer. Create a reusable 
React functional component for a [COMPONENT_NAME] with the 
following requirements:
- Use React hooks (useState, useEffect)
- Include proper prop types
- Add CSS modules for styling
- Make it responsive
- Include error handling
- Add loading states

Please provide the complete component code with comments 
explaining each section.`,
    result: 'Generated a complete, production-ready React component with proper state management, error boundaries, and responsive CSS.',
    tags: ['React', 'Code Generation', 'Best Practices']
  },
  {
    id: 2,
    category: 'Debugging',
    title: 'Smart Error Debugger',
    prompt: `Act as a debugging expert. I'm getting this error in 
my React application:

[ERROR_MESSAGE]

Here is my code:
[CODE_SNIPPET]

Please:
1. Explain WHY this error occurs (root cause)
2. Provide the FIXED code
3. Explain what you changed and why
4. Suggest how to PREVENT this error in the future
5. Rate the severity of this bug (1-10)`,
    result: 'AI identified the root cause as a missing dependency in useEffect, provided fixed code, and suggested using ESLint rules to prevent similar issues.',
    tags: ['Debugging', 'Error Handling', 'React']
  },
  {
    id: 3,
    category: 'Learning',
    title: 'Concept Explainer with Examples',
    prompt: `Explain [CONCEPT] as if I'm a junior developer with 
6 months of experience. Include:

1. Simple analogy from real life
2. Why it matters in real projects
3. Basic code example
4. Common mistakes beginners make
5. When to use it vs alternatives
6. One practical exercise I can try right now

Keep the explanation under 500 words.`,
    result: 'Received clear explanation of React Context API with a shopping cart analogy, working code example, and a hands-on exercise.',
    tags: ['Learning', 'Education', 'Self-Study']
  },
  {
    id: 4,
    category: 'Code Review',
    title: 'AI Code Reviewer',
    prompt: `Review my code as a strict senior developer conducting 
a code review. Check for:

1. 🐛 Bugs and logical errors
2. ⚡ Performance issues
3. 🔒 Security vulnerabilities
4. 📖 Code readability
5. 🏗️ Architecture improvements
6. ✅ Best practices compliance

Rate each category (1-10) and provide specific suggestions 
with improved code examples.

Here is my code:
[CODE]`,
    result: 'Received detailed review identifying 3 potential bugs, 2 performance improvements, and security recommendations for API key handling.',
    tags: ['Code Review', 'Best Practices', 'Security']
  },
  {
    id: 5,
    category: 'Project Planning',
    title: 'Feature Implementation Planner',
    prompt: `I need to implement [FEATURE] in my [TECH_STACK] project.

Act as a tech lead and help me plan:
1. Break down into small tasks (max 2 hours each)
2. Suggest the file/folder structure
3. List the dependencies I'll need
4. Identify potential challenges
5. Provide pseudo-code for the core logic
6. Estimate total development time

Current project structure: [STRUCTURE]`,
    result: 'Received a complete implementation plan with 8 tasks, recommended folder structure, and pseudo-code for authentication feature.',
    tags: ['Planning', 'Architecture', 'Project Management']
  }
];

export default promptsData;