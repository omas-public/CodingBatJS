(stdin => {
  // Define Function

  const splitFunction = (line) => {
    const sep = line.indexOf('(');
    return [line.slice(0, sep), line.slice(sep)];
  };

  const splitTestSuites = (line) => {
    return Array.from(line.split('→', 2), (col) =>
      col.trim()
    );
  };

  const makeQuestion = (question) => {
    return `/*
${question}
*/`;
  };

  const makeSrc = (line) => {
    return `
const ${line[0]} = ${line[1]} => {
  // Write code here

};
    `;
  };

  const makeSpec = (func) => {
    return `
    it('${func.join(' -> ')})', () => {
      expect(${func[0]}).toBe(${func[1]});
    });
    `;
  };

  // Declare variable
  const SEP     = '--';
  const inputs  = stdin.toString().trim().split(SEP, 2);
  // const fn      = splitFunction(inputs[1].shift());
  // const ts      = Array.from(inputs[1], splitTestSuites);

  // Main Procedure
  const result = ((question, testSuites) => {
    const func = splitFunction(testSuites.shift());
    return []
      .concat([makeQuestion(question)])
      .concat([makeSrc(func)])
      .concat([`describe('${func.join('')}', () => {`])
      .concat(Array.from(testSuites, splitTestSuites).map(makeSpec))
      .concat(['});']);

  })(inputs[0], inputs[1].trim().split('\n'));
  // Display
  console.log(result.join('\n'));

})(require('fs').readFileSync('/dev/stdin', 'utf8'));