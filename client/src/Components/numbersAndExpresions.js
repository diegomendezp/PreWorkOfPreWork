import React from 'react'

export const NumbersAndExpressions = () => {
  return(
    <div>
    <div id="doc" className="markdown-body container-fluid" style={{position: 'relative'}}><p><img src="https://i.imgur.com/1QgrNNw.png" alt="Ironhack Logo" /></p><h1 id="Numbers-Expressions-and-Evaluations"><a className="anchor hidden-xs" href="#Numbers-Expressions-and-Evaluations" title="Numbers-Expressions-and-Evaluations"><span className="octicon octicon-link" /></a>Numbers, Expressions, and Evaluations</h1><h2 id="Learning-Goals"><a className="anchor hidden-xs" href="#Learning-Goals" title="Learning-Goals"><span className="octicon octicon-link" /></a>Learning Goals</h2><p>After this lesson, you will be able to:</p><ul>
        <li>Use a variety of different operators in JavaScript.</li>
        <li>Understand what an <code>expression</code> is.</li>
        <li>Understand <code>operator precendence</code>, and the order in which your code executes.</li>
        <li>Use operators and expressions with numbers to do simple calculations.</li>
      </ul><h2 id="Introduction"><a className="anchor hidden-xs" href="#Introduction" title="Introduction"><span className="octicon octicon-link" /></a>Introduction</h2><p>In this learning unit you will understand what an operator is and how to create operations with them in JavaScript. You will also learn more about variable value assignation and how you can create an operation for a variable, such us add or substract a value.</p><div className="alert alert-info">
        <p><strong>The <code>console.log</code> command</strong><br />
          Throughout this lesson, you will see the next command:</p>
        <pre><code>console.log( ... ){"\n"}</code></pre>
        <p>You will learn more about the <code>console</code> object later, but for now you just need to know it is an instruction that allow us to print a value, or a variable’s value.</p>
      </div><h2 id="Basic-Operators"><a className="anchor hidden-xs" href="#Basic-Operators" title="Basic-Operators"><span className="octicon octicon-link" /></a>Basic Operators</h2><p>If you’re familiar with math or other sciences, the term <code>operator</code> is likely familiar. When you’re doing basic addition, in the example <code>2 + 2</code>, <code>+</code> is the <strong>operator</strong>, and addition is the <strong>operation</strong>.</p><p>In math, there’s a whole host of operators beyond simple addition. In code (specifically JavaScript for now), there are as well. Some simple examples are:</p><ul>
        <li><code>+</code> addition</li>
        <li><code>-</code> subtraction</li>
        <li><code>*</code> multiplication</li>
        <li><code>/</code> division</li>
      </ul><p>Everyone is familiar with these operators, but here’s a Replit to experiment with:</p><iframe height={350} src="https://repl.it/@ta_web_mad/NumbersandExpresions1Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
      </iframe><h2 id="Advanced-Operators"><a className="anchor hidden-xs" href="#Advanced-Operators" title="Advanced-Operators"><span className="octicon octicon-link" /></a>Advanced Operators</h2><h3 id="Exponentiation"><a className="anchor hidden-xs" href="#Exponentiation" title="Exponentiation"><span className="octicon octicon-link" /></a>Exponentiation</h3><p>In math, there is a very useful concept called <a href="http://mathworld.wolfram.com/Exponentiation.html" target="_blank">exponentiation</a>. Exponentiation is the process of taking a quantity <code>b</code> (the base) to the power of another quantity <code>e</code> (the exponent).</p><p>In JavaScript, you can easily use exponentiation by using the <code>**</code> (exponentiation) operator:</p><pre><code className="javascript hljs">console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token number">2</span><span className="token operator">**</span><span className="token number">3</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">// =&gt; 8</span>{"\n"}</code></pre><h3 id="Modulus"><a className="anchor hidden-xs" href="#Modulus" title="Modulus"><span className="octicon octicon-link" /></a>Modulus</h3><p><em>Modulus</em> (<code>%</code>) is the remainder operator. While the <em>division</em> (<code>/</code>) returns the quotient, <em>modulus</em> will return the remainder of that division.</p><p>Another difference is, while <em>division</em> will return the exact quotient of the operation to reach a reminder of 0, <em>modulus</em> will do the operation with exact numbers. This means <strong>without decimals</strong>.</p><p>This is very handy for finding multiples of a particular number, and many other use cases.</p><p>Let’s see an example:</p><iframe height={500} src="https://repl.it/@ta_web_mad/NumbersandExpresions2Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
      </iframe><h3 id="Operating-with-variables"><a className="anchor hidden-xs" href="#Operating-with-variables" title="Operating-with-variables"><span className="octicon octicon-link" /></a>Operating with variables</h3><p>Previously you learnt to assign values to variables. When you do <code>variable = expression</code>, <code>=</code> is the <code>assignment operator</code> because it is assigning one value to a variable.</p><p>Then, if you wanted to add one to a counter:</p><iframe height={550} src="https://repl.it/@ta_web_mad/NumbersandExpresions3Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
      </iframe><p>It could be a little bit annoying to write the same variable names over and over again. Luckily, you have at your disposal other operators to assign values to a variable. Let’s take a look at an example:</p><iframe height={550} src="https://repl.it/@ta_web_mad/NumbersandExpresions4Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
      </iframe><p>The assignment <code>+=</code> is the equivalent of <code>myAge = myAge + 1</code>.</p><h4 id="Basic-Assignment-Operators-Table"><a className="anchor hidden-xs" href="#Basic-Assignment-Operators-Table" title="Basic-Assignment-Operators-Table"><span className="octicon octicon-link" /></a>Basic Assignment Operators Table</h4><table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Operator</th>
            <th>Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Assignment</strong></td>
            <td>x = y</td>
            <td>N / A</td>
          </tr>
          <tr>
            <td><strong>Addition assignment</strong></td>
            <td>x += y</td>
            <td>x = x + y</td>
          </tr>
          <tr>
            <td><strong>Subtraction assignment</strong></td>
            <td>x -= y</td>
            <td>x = x - y</td>
          </tr>
          <tr>
            <td><strong>Multiplication assignment</strong></td>
            <td>x *= y</td>
            <td>x = x * y</td>
          </tr>
          <tr>
            <td><strong>Division assignment</strong></td>
            <td>x /= y</td>
            <td>x = x / y</td>
          </tr>
          <tr>
            <td><strong>Remainder assignment</strong></td>
            <td>x %= y</td>
            <td>x = x % y</td>
          </tr>
          <tr>
            <td><strong>Exponentiation assignment</strong></td>
            <td>x **= y</td>
            <td>x = x ** y</td>
          </tr>
        </tbody>
      </table><h2 id="Expressions"><a className="anchor hidden-xs" href="#Expressions" title="Expressions"><span className="octicon octicon-link" /></a>Expressions</h2><p><em>An expression is any valid set of literals, variables, operators, and other expressions that evaluates to a single value. The value may be a number, a string, or a logical value. Conceptually, there are two types of expressions: those that assign a value to a variable, and those that simply have a value.</em></p><p><em><strong>In Human</strong></em>: An expression is a combination of any <code>value</code> (number, string, array, object) and set of <code>operators</code> that result in another value.</p><h3 id="A-simple-Expression"><a className="anchor hidden-xs" href="#A-simple-Expression" title="A-simple-Expression"><span className="octicon octicon-link" /></a>A simple Expression</h3><pre><code>2 + 4{"\n"}</code></pre><p>And this is it’s correspondening <a href="https://en.wikipedia.org/wiki/Parse_tree" target="_blank">parse tree</a>:</p><p><img src="https://i.imgur.com/TmjyhUY.png" alt width={400} /></p><p><em>Take the number two and add four to it.</em></p><h3 id="A-more-complicated-Expression"><a className="anchor hidden-xs" href="#A-more-complicated-Expression" title="A-more-complicated-Expression"><span className="octicon octicon-link" /></a>A more complicated Expression</h3><pre><code className="javascript hljs"><span className="token keyword">var</span> result <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token number">7</span> <span className="token operator">+</span> <span className="token number">5</span><span className="token punctuation">)</span> <span className="token operator">/</span> <span className="token number">3</span><span className="token punctuation">)</span> <span className="token operator">-</span> <span className="token number">8</span>{"\n"}<span className="token comment">// =&gt; -4</span>{"\n"}</code></pre><ul>
        <li>Take the number 7, add 5 to it.</li>
        <li>Divide this new value by 3.</li>
        <li>Take that value and then subtract 8.</li>
        <li>Assign that value to <code>result</code>.</li>
      </ul><p><img src="https://i.imgur.com/10hLzuz.png" alt /></p><p><em>Parantheses</em> are a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping" target="_blank">grouping operator</a>, but more on this in the next section.</p><p>In this example, JavaScript knows in what steps to put the numbers together. How does it do this?</p><h2 id="Operator-Precedence"><a className="anchor hidden-xs" href="#Operator-Precedence" title="Operator-Precedence"><span className="octicon octicon-link" /></a>Operator Precedence</h2><p><em>In mathematics and computer programming, the order of operations (or operator precedence) is a collection of rules that define which procedures to perform first in order to evaluate a given mathematical expression</em>.</p><p>Expressions in math have a particular order in which they get evaluated, based on the operators they use.</p><p><code>2 + 2 = 4</code><br />
        <code>2 + 2 * 2 = 6</code><br />
        <code>(2 + 2) * 2 = 8</code></p><p>In JavaScript, the mathematical operators are the same as they are in math, that is to say <strong>PEMDAS</strong>. What is PEMDAS?</p><table>
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>Precedence</th>
            <th>Operator</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: 'center'}}>1</td>
            <td><code>()</code></td>
            <td><strong>P</strong>arantheses</td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}>2</td>
            <td><code>**</code></td>
            <td><strong>E</strong>xponents</td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}>3</td>
            <td><code>*</code></td>
            <td><strong>M</strong>ultiplication</td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}>4</td>
            <td><code>/</code></td>
            <td><strong>D</strong>ivision</td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}>5</td>
            <td><code>+</code></td>
            <td><strong>A</strong>ddition</td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}>6</td>
            <td><code>-</code></td>
            <td><strong>S</strong>ubtraction</td>
          </tr>
        </tbody>
      </table><p>The lower the index (<strong>1</strong> for <strong>Parentheses</strong>, <strong>2</strong> for <strong>Exponents</strong>, etc), the higher the precedence, meaning that anything in parentheses will be executed first, exponents second, multiplication third, etc.</p><pre><code className="javascript hljs"><span className="token keyword">var</span> i <span className="token operator">=</span> <span className="token number">10</span> <span className="token operator">+</span> <span className="token number">5</span> <span className="token operator">*</span> <span className="token number">2</span> <span className="token operator">**</span> <span className="token number">3</span> <span className="token operator">/</span> <span className="token number">4</span> <span className="token operator">-</span> <span className="token number">6</span>{"\n"}<span className="token comment">//{"  "}=== 10 + 5 * 8 / 4 - 6</span>{"\n"}<span className="token comment">//{"  "}=== 10 + 5 * 2 - 6</span>{"\n"}<span className="token comment">//{"  "}=== 10 + 10 - 6</span>{"\n"}<span className="token comment">//{"  "}=== 10 + 4</span>{"\n"}<span className="token comment">//{"  "}==&gt; 14</span>{"\n"}</code></pre><p>JavaScript will parse that expression following the <strong>PEMDAS</strong> rules for precedence, therefore, it will start by evaluating the exponents, and then the division, then the multiplication, and so forth.</p><p>This Parse Tree diagram may help you understand it more visually :)</p><p><img src="https://i.imgur.com/vRjzZ3x.png" alt /></p><p>You can find a list of these operators, and the order in which they are executed <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank">here at MDN</a>.</p><h3 id="Exercise-Guess-the-Expression-Result"><a className="anchor hidden-xs" href="#Exercise-Guess-the-Expression-Result" title="Exercise-Guess-the-Expression-Result"><span className="octicon octicon-link" /></a>Exercise: Guess the Expression Result!</h3><p>Take a solid guess at what the result of the expression is going to be!</p><p><strong>Tip:</strong> To see the actual result, uncomment the <code>console.log</code> removing the doble slash (<code>//</code>);</p><iframe height={550} src="https://repl.it/@ta_web_mad/NumbersandExpresions5Example?lite=true" allowFullScreen="true" style={{width: '100%'}}>
      </iframe><h2 id="Summary"><a className="anchor hidden-xs" href="#Summary" title="Summary"><span className="octicon octicon-link" /></a>Summary</h2><p>To sum up, in this lesson you have learnt that there are many different operations you can perform in JavaScript. You can perform math operations you are familiar with such as <code>+</code>, <code>*</code>, <code>-</code> and <code>/</code>, and some other’s you may not be familiar with as well.</p><p>You have also seen what an <code>expression</code> is, and how they are evaluated based on what operators are present.</p><h2 id="Extra-Resources"><a className="anchor hidden-xs" href="#Extra-Resources" title="Extra-Resources"><span className="octicon octicon-link" /></a>Extra Resources</h2><ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions" target="_blank">MDN Expressions and Operators</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank">MDN Operator Precedence</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Number_instances" target="_blank">MDN Numbers</a></li>
        <li><a href="http://www.2ality.com/2012/09/expressions-vs-statements.html" target="_blank">Expressions vs Statements</a></li>
      </ul><div dir="ltr" className="resize-sensor" style={{position: 'absolute', left: '-10px', top: '-10px', right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div className="resize-sensor-expand" style={{position: 'absolute', left: '-10px', top: '-10px', right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div style={{position: 'absolute', left: 0, top: 0, transition: 'all 0s ease 0s', width: 100000, height: 100000}} /></div><div className="resize-sensor-shrink" style={{position: 'absolute', left: '-10px', top: '-10px', right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}><div style={{position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%'}} /></div></div></div>
    <div className="ui-toc dropup unselectable hidden-print" style={{display: 'none'}}>
      <div className="pull-right dropdown">
        <a id="tocLabel" className="ui-toc-label btn btn-default" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" title="Table of content">
          <i className="fa fa-bars" />
        </a>
        <ul id="ui-toc" className="ui-toc-dropdown dropdown-menu" aria-labelledby="tocLabel">
          <div className="toc"><ul className="nav"><li className><a href="#Numbers-Expressions-and-Evaluations" title="Numbers, Expressions, and Evaluations">Numbers, Expressions, and Evaluations</a><ul className="nav"><li className><a href="#Learning-Goals" title="Learning Goals">Learning Goals</a></li><li className><a href="#Introduction" title="Introduction">Introduction</a></li><li><a href="#Basic-Operators" title="Basic Operators">Basic Operators</a></li><li><a href="#Advanced-Operators" title="Advanced Operators">Advanced Operators</a><ul className="nav"><li><a href="#Exponentiation" title="Exponentiation">Exponentiation</a></li><li><a href="#Modulus" title="Modulus">Modulus</a></li><li><a href="#Operating-with-variables" title="Operating with variables">Operating with variables</a></li></ul></li><li><a href="#Expressions" title="Expressions">Expressions</a><ul className="nav"><li><a href="#A-simple-Expression" title="A simple Expression">A simple Expression</a></li><li><a href="#A-more-complicated-Expression" title="A more complicated Expression">A more complicated Expression</a></li></ul></li><li className><a href="#Operator-Precedence" title="Operator Precedence">Operator Precedence</a><ul className="nav"><li className><a href="#Exercise-Guess-the-Expression-Result" title="Exercise: Guess the Expression Result!">Exercise: Guess the Expression Result!</a></li></ul></li><li><a href="#Summary" title="Summary">Summary</a></li><li className><a href="#Extra-Resources" title="Extra Resources">Extra Resources</a></li></ul></li></ul></div><div className="toc-menu"><a className="expand-toggle" href="#">Expand all</a><a className="back-to-top" href="#">Back to top</a><a className="go-to-bottom" href="#">Go to bottom</a></div>
        </ul>
      </div>
    </div>
    <div id="ui-toc-affix" className="ui-affix-toc ui-toc-dropdown unselectable hidden-print" data-spy="affix" style={{top: 17, display: 'none'}}>
      <div className="toc"><ul className="nav"><li className><a href="#Numbers-Expressions-and-Evaluations" title="Numbers, Expressions, and Evaluations">Numbers, Expressions, and Evaluations</a><ul className="nav"><li className><a href="#Learning-Goals" title="Learning Goals">Learning Goals</a></li><li className><a href="#Introduction" title="Introduction">Introduction</a></li><li><a href="#Basic-Operators" title="Basic Operators">Basic Operators</a></li><li><a href="#Advanced-Operators" title="Advanced Operators">Advanced Operators</a><ul className="nav"><li><a href="#Exponentiation" title="Exponentiation">Exponentiation</a></li><li><a href="#Modulus" title="Modulus">Modulus</a></li><li><a href="#Operating-with-variables" title="Operating with variables">Operating with variables</a></li></ul></li><li><a href="#Expressions" title="Expressions">Expressions</a><ul className="nav"><li><a href="#A-simple-Expression" title="A simple Expression">A simple Expression</a></li><li><a href="#A-more-complicated-Expression" title="A more complicated Expression">A more complicated Expression</a></li></ul></li><li className><a href="#Operator-Precedence" title="Operator Precedence">Operator Precedence</a><ul className="nav"><li className><a href="#Exercise-Guess-the-Expression-Result" title="Exercise: Guess the Expression Result!">Exercise: Guess the Expression Result!</a></li></ul></li><li><a href="#Summary" title="Summary">Summary</a></li><li className><a href="#Extra-Resources" title="Extra Resources">Extra Resources</a></li></ul></li></ul></div><div className="toc-menu"><a className="expand-toggle" href="#">Expand all</a><a className="back-to-top" href="#">Back to top</a><a className="go-to-bottom" href="#">Go to bottom</a></div>
    </div>
  </div>
  
  )
}