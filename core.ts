import fs from 'fs';
import * as parser from '@babel/parser';
// Import with proper namespace handling
import traverse from '@babel/traverse';

export function handleFileAutoExport(filePath: string) {
  if (!/\.(ts|tsx|js|jsx)$/.test(filePath)) return;

  let content: string;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    return;
  }

  if (content.includes('export default')) return;

  let ast;
  try {
    ast = parser.parse(content, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
  } catch {
    return;
  }

  let componentName = '';

  // Use traverse with a check to handle both function and object forms
const traverseFn = (traverse as any).default || traverse;
  traverseFn(ast, {
    FunctionDeclaration(path: any) {
      if (!componentName) componentName = path.node.id?.name || '';
    },
    VariableDeclaration(path: any) {
      const decl = path.node.declarations[0];
      if (decl && decl.id.type === 'Identifier' && !componentName) {
        componentName = decl.id.name;
      }
    },
  });

  if (!componentName && content.includes('return') && content.includes('<')) {
    const updated = `const Anonymous = () => { ${content} }\n\nexport default Anonymous;`;
    fs.writeFileSync(filePath, updated, 'utf-8');
    console.log(`🌀 [EDA] Wrapped unnamed JSX as default: ${filePath}`);
    return;
  }

  if (componentName) {
    fs.writeFileSync(
      filePath,
      `${content}\n\nexport default ${componentName};\n`,
      'utf-8'
    );
    console.log(`✅ [EDA] Auto-exported: ${filePath}`);
  }
}
