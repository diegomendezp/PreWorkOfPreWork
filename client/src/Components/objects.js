import React from 'react';

export const objects = () => {
      return (
        <div>
          <div id="doc" className="markdown-body container-fluid" style={{position: 'relative'}}><h1 id="Basic-Data-Types-Object"><a className="anchor hidden-xs" href="#Basic-Data-Types-Object" title="Basic-Data-Types-Object"><span className="octicon octicon-link" /></a>Basic Data Types: Object</h1><h2 id="Learning-Goals"><a className="anchor hidden-xs" href="#Learning-Goals" title="Learning-Goals"><span className="octicon octicon-link" /></a>Learning Goals</h2><p>After this lesson, you will be able to:</p><ul>
              <li>Understand <code>Objects</code> as a collection.</li>
              <li>Explain key-value relationships.</li>
              <li>Use <code>Object</code> in JavaScript and understand its importance.</li>
              <li>Add, remove, and change keys and values in objects.</li>
              <li>Use <code>Objects</code> using <code>dot</code> and <code>brackets</code> notation.</li>
              <li>List the properties of an <code>Object</code>.</li>
            </ul><h2 id="Introduction"><a className="anchor hidden-xs" href="#Introduction" title="Introduction"><span className="octicon octicon-link" /></a>Introduction</h2><p><strong>An <code>Object</code> in JavaScript</strong> is a collection composed of <em>key-value</em> pairs.</p><p>The <strong><em>key-value</em> pair</strong> is a very important concept to understand how <code>Object</code> data types work in JavaScript.</p><p>In programming, a <strong><em>key-value</em> pair</strong> is a set of two linked data items:</p><ul>
              <li>
                <p>The <strong>key</strong> is a string that identifies a property of an object.</p>
              </li>
              <li>
                <p>The <strong>value</strong> is the content associated to the indicated key. The keys are also unique in an object, one key will always have just one value associated to it. This value could be any type of JavaScript value.</p>
              </li>
            </ul><p>The most common example to explain this concept is a Dictionary. The key is the word you are looking for, while the value is the description of that word:</p><blockquote>
              <p><strong>Website</strong> - Connected group of pages on the World Wide Web regarded as a single entity, usually maintained by one person or organization and devoted to a single topic or several closely related topics.</p>
            </blockquote><p>The word <code>website</code> is the key, and the <code>definition</code> is the <em>associated</em> value of this key, which is unique in the Dictionary.</p><h2 id="Why-Should-We-Use-Objects"><a className="anchor hidden-xs" href="#Why-Should-We-Use-Objects" title="Why-Should-We-Use-Objects"><span className="octicon octicon-link" /></a>Why Should We Use Objects?</h2><p>Objects are useful to <strong>group values that belong together into a single unit</strong>. Objects can store relations between variables and properties using <em>key</em> and <em>value</em> associations. The value of an object could be any type you may need: <code>strings</code>, <code>numbers</code>, <code>arrays</code>, <code>functions</code>, or even other <code>objects</code>!</p><p>This kind of <em>composition</em> is very useful, as you can store variables that hold related information in one <code>object</code>.</p><p>By using this notation, your code will be much more clear and easy to understand. It will help you to have more semantic code, and the maintainability of the code will be much easier.</p><div className="alert alert-warning">
              <p><img alt=":exclamation:" className="emoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/exclamation.png" title=":exclamation:" /> Create a new replit and following along with the code snippets!</p>
            </div><h2 id="Object-Definition"><a className="anchor hidden-xs" href="#Object-Definition" title="Object-Definition"><span className="octicon octicon-link" /></a>Object Definition</h2><p>Creating objects is super easy, all you need to do is use the curly braces <code>{'{'}</code>  and <code>{'}'}</code>, and add your keys and values to it separated by commas:</p><pre><code className="javascript hljs"><span className="token punctuation">{"{"}</span>{"\n"}{"  "}key1<span className="token punctuation">:</span> value1<span className="token punctuation">,</span>{"\n"}{"  "}key2<span className="token punctuation">:</span> value2<span className="token punctuation">,</span>{"\n"}{"  "}key3<span className="token punctuation">:</span> value3{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p>Despite us telling you <strong>keys</strong> are always <em>Strings</em>, you typically don’t need to wrap these keys in quotes when defining an object:</p><pre><code className="javascript hljs"><span className="token punctuation">{"{"}</span>{"\n"}{"  "}name<span className="token punctuation">:</span> <span className="token string">"Ironhack"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p>Will be translated into:</p><pre><code className="javascript hljs"><span className="token punctuation">{"{"}</span>{"\n"}{"  "}<span className="token string">"name"</span><span className="token punctuation">:</span> <span className="token string">"Ironhack"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><h3 id="Object-Example"><a className="anchor hidden-xs" href="#Object-Example" title="Object-Example"><span className="octicon octicon-link" /></a>Object (Example)</h3><p>We have prepared an <code>Object</code> definition to show you its structure. In the example, you have an object with a history of the olympic games records:</p><pre><code className="javascript hljs"><span className="token punctuation">{"{"}</span>{"\n"}{"  "}athletics100Men<span className="token punctuation">:</span> <span className="token string">"Justin Gatlin"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p>In this example, you just have one property, <code>athletics100Men</code>, which will give you the value for the Athletics 100 meters men olympic record.</p><ul>
              <li>The <strong>key</strong> is <code>athletics100Men</code>.
                <ul>
                  <li>The associated <strong>value</strong> is <code>Justin Gatlin</code>.</li>
                </ul>
              </li>
            </ul><p>Remember that keys can’t have spaces like <code>my key</code>, and they should be camelCase.</p><p>Objects are literals, and they can be stored in variables. Let’s store our object in the <code>olympicRecords</code> variable:</p><pre><code className="javascript hljs"><span className="token keyword">var</span> olympicRecords <span className="token operator">=</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}athletics100Men<span className="token punctuation">:</span> <span className="token string">"Justin Gatlin"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p>If you want to store <a href="https://en.wikipedia.org/wiki/Mike_Powell_(long_jumper)" target="_blank" rel="noopener noreferrer">Mike Powel</a> and his long jump record of 8.95m, you can do it by adding another key:</p><pre><code className="javascript hljs"><span className="token keyword">var</span> olympicRecords <span className="token operator">=</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}athletics100Men<span className="token punctuation">:</span> <span className="token string">"Justin Gatlin"</span><span className="token punctuation">,</span>{"\n"}{"  "}athleticsLongJumpMen<span className="token punctuation">:</span> <span className="token string">"Mike Powel"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><div className="alert alert-warning">
              <p><img alt=":exclamation:" className="emoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/exclamation.png" title=":exclamation:" /> You have to separate the <code>athletics100Men</code> and the <code>athleticsLongJumpMen</code> properties with a <strong>comma</strong> after the value, otherwise it will give you an error!</p>
            </div><h2 id="Accessing-Values"><a className="anchor hidden-xs" href="#Accessing-Values" title="Accessing-Values"><span className="octicon octicon-link" /></a>Accessing Values</h2><p>If you try to access <code>olympicRecords</code> it’s going to return an Object, the container of all properties.</p><pre><code>console.log(olympicRecords){"\n"}=&gt; Object {"{"} athletics100Men: "Justin Gatlin", athleticsLongJumpMen: "Mike Powel" {"}"}{"\n"}</code></pre><p>Wouldn’t it be useful to access the values inside the object? You have two different ways to do this: <code>dot notation</code> and <code>brackets notation</code>.</p><p><strong>Accessing values with dot notation</strong></p><pre><code className="javascript hljs">olympicRecords<span className="token punctuation">.</span>athletics100Men <span className="token comment">// =&gt; "Justin Gatlin"</span>{"\n"}</code></pre><p><strong>Accessing values with brackets notation</strong></p><pre><code className="javascript hljs">olympicRecords<span className="token punctuation">[</span><span className="token string">"athletics100Men"</span><span className="token punctuation">]</span> <span className="token comment">// =&gt; "Justin Gatlin"</span>{"\n"}</code></pre><div className="alert alert-info">
              <p><img alt=":bulb:" className="emoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/bulb.png" title=":bulb:" /> With some exceptions, there are few differences between the two. It’s best practice to use dot notation as much as you can though because it’s shorter and cleaner.</p>
            </div><h2 id="Adding-Properties-to-the-Object"><a className="anchor hidden-xs" href="#Adding-Properties-to-the-Object" title="Adding-Properties-to-the-Object"><span className="octicon octicon-link" /></a>Adding Properties to the Object</h2><p>Let’s add some new properties (key-value pairs) to your object. You have two different ways to add new properties to the object: while you are declaring the object, and after you have declared it.</p><p>Let’s add the most decorated Olympian of all time, the Olympic Record in Swimming 200 meters men category <a href="https://en.wikipedia.org/wiki/Michael_Phelps" target="_blank" rel="noopener noreferrer">Michael Phelps</a>.</p><p>You can add a new property to the object when you declare it. Easy:</p><pre><code className="javascript hljs"><span className="token keyword">var</span> olympicRecords <span className="token operator">=</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}athletics100Men<span className="token punctuation">:</span> <span className="token string">"Justin Gatlin"</span><span className="token punctuation">,</span>{"\n"}{"  "}athleticsLongJumpMen<span className="token punctuation">:</span> <span className="token string">"Mike Powel"</span><span className="token punctuation">,</span>{"\n"}{"  "}swimming200Men<span className="token punctuation">:</span> <span className="token string">"Michael Phelps"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p>As you can see, you can add many keys as you want inside an object, all you need to do is separate all the properties with a <code>comma</code>.</p><h3 id="Adding-Properties-With-Dot-Notation"><a className="anchor hidden-xs" href="#Adding-Properties-With-Dot-Notation" title="Adding-Properties-With-Dot-Notation"><span className="octicon octicon-link" /></a>Adding Properties With Dot Notation</h3><p>You can also add properties to an object <strong>after you define it</strong>. In the same way you declare a variable, you need to give it a name and a value. You do that by creating a <strong>new key</strong> attached to the object and assigning it a value:</p><pre><code className="javascript hljs"><span className="token keyword">var</span> olympicRecords <span className="token operator">=</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}athletics100Men<span className="token punctuation">:</span> <span className="token string">"Justin Gatlin"</span><span className="token punctuation">,</span>{"\n"}{"  "}athleticsLongJumpMen<span className="token punctuation">:</span> <span className="token string">"Mike Powel"</span><span className="token punctuation">,</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}{"\n"}olympicRecords<span className="token punctuation">.</span>swimming200Men <span className="token operator">=</span> <span className="token string">"Michael Phelps"</span><span className="token punctuation">;</span>{"\n"}</code></pre><p>As you see, you can add a new key by referencing it directly with a dot. Nothing else! Awesome, huh? ;)</p><h3 id="Adding-Properties-With-Bracket-Notation"><a className="anchor hidden-xs" href="#Adding-Properties-With-Bracket-Notation" title="Adding-Properties-With-Bracket-Notation"><span className="octicon octicon-link" /></a>Adding Properties With Bracket Notation</h3><p>There is also another way to add new properties to the object. You can treat it as if it were an array. Let’s add the Olympic Champion and nine-time world champion <a href="https://en.wikipedia.org/wiki/Katie_Ledecky" target="_blank" rel="noopener noreferrer">Katie Ledecky</a> to the object:</p><pre><code className="javascript hljs"><span className="token keyword">var</span> olympicRecords <span className="token operator">=</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}athletics100Men<span className="token punctuation">:</span> <span className="token string">"Justin Gatlin"</span><span className="token punctuation">,</span>{"\n"}{"  "}athleticsLongJumpMen<span className="token punctuation">:</span> <span className="token string">"Mike Powel"</span><span className="token punctuation">,</span>{"\n"}{"  "}swimming200Men<span className="token punctuation">:</span> <span className="token string">"Michael Phelps"</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}{"\n"}olympicRecords<span className="token punctuation">[</span><span className="token string">"swimming400Women"</span><span className="token punctuation">]</span> <span className="token operator">=</span> <span className="token string">"Katie Ledecky"</span><span className="token punctuation">;</span>{"\n"}</code></pre><p>So you can use the brackets to add new pairs of key-values to the object. You have to name the key between the brackets and assign it a value.</p><div className="alert alert-warning">
              <p><img alt=":exclamation:" className="emoji" src="https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/exclamation.png" title=":exclamation:" /> Remember that if you use bracket notation, you need to <strong>wrap the key with quotes</strong> (<code>"</code>), unless it’s a variable containing a string!</p>
            </div><h2 id="Update-Values"><a className="anchor hidden-xs" href="#Update-Values" title="Update-Values"><span className="octicon octicon-link" /></a>Update Values</h2><p>Hold on… Justin Gatlin?? What happened with the greatest sprinter of all time <a href="https://en.wikipedia.org/wiki/Usain_Bolt" target="_blank" rel="noopener noreferrer">Usain Bolt</a>? <strong>It’s outdated!!</strong> Don’t worry, you will update it. You have to modify the <code>athletics100Men</code> property in the object. Justin Gatlin is not the fastest man on earth any more, it’s Usain Bolt.</p><p>You have two different ways to update values in an object. Can you guess which ones? Exactly! The same ways you just learned:</p><p><strong>Updating values with dot notation</strong></p><pre><code className="javascript hljs">olympicRecords<span className="token punctuation">.</span>athletics100Men <span className="token operator">=</span> <span className="token string">"Usain Bolt"</span><span className="token punctuation">;</span>{"\n"}</code></pre><p><strong>Updating values with brackets notation</strong></p><pre><code className="javascript hljs">{"\n"}olympicRecords<span className="token punctuation">[</span><span className="token string">"athletics100Men"</span><span className="token punctuation">]</span> <span className="token operator">=</span> <span className="token string">"Usain Bolt"</span><span className="token punctuation">;</span>{"\n"}</code></pre><h2 id="Removing-Properties"><a className="anchor hidden-xs" href="#Removing-Properties" title="Removing-Properties"><span className="octicon octicon-link" /></a>Removing Properties</h2><p>Let’s work a little bit more with our <code>Object</code>. Let’s suppose you’ve added a new key, the <a href="https://www.youtube.com/watch?v=laH5m2LDM30" target="_blank">Double Ollie</a> world record:</p><pre><code className="javascript hljs">olympicRecords<span className="token punctuation">.</span>doubleOllie <span className="token operator">=</span> <span className="token string">"Chris Chann"</span>{"\n"}</code></pre><p>After careful consideration, you realize that it’s not actually an olympic sport. How can you remove this key?</p><p>In JavaScript you have the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" target="_blank"><code>delete</code> operator</a> to remove keys from an object. You just have to specify which key you want to remove:</p><p><strong>Updating values with dot notation</strong></p><pre><code className="javascript hljs"><span className="token keyword">delete</span> olympicRecords<span className="token punctuation">.</span>doubleOllie<span className="token punctuation">;</span>{"\n"}</code></pre><p><strong>Updating values with brackets notation</strong></p><pre><code className="javascript hljs">{"\n"}<span className="token keyword">delete</span> olympicRecords<span className="token punctuation">[</span><span className="token string">"doubleOllie"</span><span className="token punctuation">]</span><span className="token punctuation">;</span>{"\n"}</code></pre><p>Now, if you take a look at the <code>olympicRecords</code> object, you will have just the real olympic records!!</p><pre><code className="javascript hljs">console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>olympicRecords<span className="token punctuation">)</span><span className="token punctuation">;</span>{"\n"}{"\n"}<span className="token comment">// =&gt; olympicRecords = {"{"}</span>{"\n"}<span className="token comment">//{"     "}athletics100Men: "Usain Bolt",</span>{"\n"}<span className="token comment">//{"     "}athleticsLongJumpMen: "Mike Powel",</span>{"\n"}<span className="token comment">//{"     "}swimming200Men: "Michael Phelps",</span>{"\n"}<span className="token comment">//{"     "}swimming400Women: "Katie Ledecky"</span>{"\n"}<span className="token comment">//{"   "}{"}"}</span>{"\n"}</code></pre><h2 id="List-Properties"><a className="anchor hidden-xs" href="#List-Properties" title="List-Properties"><span className="octicon octicon-link" /></a>List Properties</h2><p>To finish the lesson, you will show you an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">Object</a> method that will help you to list all the properties of the object.</p><p>This is useful when you have a huge object and you are not sure what properties it has. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">Object.keys()</a> receives an object as a parameter. In our case it would be:</p><pre><code className="javascript hljs">Object<span className="token punctuation">.</span><span className="token function">keys</span><span className="token punctuation">(</span>olympicRecords<span className="token punctuation">)</span><span className="token punctuation">;</span>{"\n"}<span className="token comment">// =&gt; ["athletics100Men", "athleticsLongJumpMen", "swimming200Men", "swimming400Women"]</span>{"\n"}</code></pre><p>The function returns an array with all the properties keys of the object. Once you have the array, you can iterate over the elements and do whatever you please.</p><h3 id="Bonus-Listing-Values"><a className="anchor hidden-xs" href="#Bonus-Listing-Values" title="Bonus-Listing-Values"><span className="octicon octicon-link" /></a>Bonus: Listing Values</h3><p>In JavaScript, there is a loop specifically designed for iterating over objects. This loop is called <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" target="_blank"><code>for..in</code></a>.</p><p>The syntax is as follows:</p><pre><code className="javascript hljs"><span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token operator">&lt;</span> placeholder <span className="token keyword">for</span> key<span className="token operator">&gt;</span> <span className="token keyword">in</span> <span className="token operator">&lt;</span>placeholder <span className="token keyword">for</span> object<span className="token operator">&gt;</span><span className="token punctuation">)</span><span className="token punctuation">{"{"}</span>{"\n"}{"  "}<span className="token operator">&lt;</span> code to be run <span className="token operator">&gt;</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p><strong>Printing Keys</strong></p><pre><code className="javascript hljs"><span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token keyword">var</span> recordName <span className="token keyword">in</span> olympicRecords<span className="token punctuation">)</span><span className="token punctuation">{"{"}</span>{"\n"}{"  "}<span className="token comment">// recordName is a **key** in the object</span>{"\n"}{"  "}console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">"recordName: "</span> <span className="token operator">+</span> recordName<span className="token punctuation">)</span><span className="token punctuation">;</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p><strong>Printing Values</strong></p><pre><code className="javascript hljs"><span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token keyword">var</span> recordName <span className="token keyword">in</span> olympicRecords<span className="token punctuation">)</span><span className="token punctuation">{"{"}</span>{"\n"}{"  "}<span className="token comment">// When we access a property in an object using a variable</span>{"\n"}{"  "}<span className="token comment">// ...we must use bracket notation</span>{"\n"}{"  "}console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">"Value: "</span> <span className="token operator">+</span> olympicRecords<span className="token punctuation">[</span>recordName<span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">;</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><p><strong>Printing Both</strong></p><pre><code className="javascript hljs"><span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token keyword">var</span> recordName <span className="token keyword">in</span> olympicRecords<span className="token punctuation">)</span><span className="token punctuation">{"{"}</span>{"\n"}{"  "}console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">"The value of "</span> <span className="token operator">+</span> recordName <span className="token operator">+</span> <span className="token string">" is "</span> <span className="token operator">+</span> olympicRecords<span className="token punctuation">[</span>recordName<span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">;</span>{"\n"}<span className="token punctuation">{"}"}</span>{"\n"}</code></pre><h2 id="Summary"><a className="anchor hidden-xs" href="#Summary" title="Summary"><span className="octicon octicon-link" /></a>Summary</h2><p>In this lesson, you have learned some programming fundamentals like key-value pairs, and you have seen how JavaScript uses <code>Objects</code> to create these pairs, and why it’s a good practice to use them.</p><p>Now, you are able to create objects and interact with their properties and values.</p><p>Objects and arrays are <em>super</em> common and useful in programming. Arrays are useful for lists, but objects are king when you’re trying to <em>label</em> information. Pick the right data structure for the job!</p><h2 id="Extra-Resources"><a className="anchor hidden-xs" href="#Extra-Resources" title="Extra-Resources"><span className="octicon octicon-link" /></a>Extra Resources</h2><ul>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank"><code>Object</code></a> - MDN Documentation.</li>
              <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors" target="_blank">Property Accessors</a> - MDN Documentation.</li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" target="_blank"><code>delete</code> operator</a> - Delete a property from an <code>Object</code>.</li>
              <li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank"><code>Object.keys()</code> method</a> - Lists all the properties of an <code>Object</code></li>
            </ul></div>
          <div className="ui-toc dropup unselectable hidden-print" style={{display: 'none'}}>
            <div className="pull-right dropdown">
              <a id="tocLabel" className="ui-toc-label btn btn-default" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" title="Table of content">
                <i className="fa fa-bars" />
              </a>
              <ul id="ui-toc" className="ui-toc-dropdown dropdown-menu" aria-labelledby="tocLabel">
                <div className="toc"><ul className="nav"><li className><a href="#Basic-Data-Types-Object" title="Basic Data Types: Object">Basic Data Types: Object</a><ul className="nav"><li className><a href="#Learning-Goals" title="Learning Goals">Learning Goals</a></li><li className><a href="#Introduction" title="Introduction">Introduction</a></li><li className><a href="#Why-Should-We-Use-Objects" title="Why Should We Use Objects?">Why Should We Use Objects?</a></li><li className><a href="#Object-Definition" title="Object Definition">Object Definition</a><ul className="nav"><li className><a href="#Object-Example" title="Object (Example)">Object (Example)</a></li></ul></li><li className><a href="#Accessing-Values" title="Accessing Values">Accessing Values</a></li><li className><a href="#Adding-Properties-to-the-Object" title="Adding Properties to the Object">Adding Properties to the Object</a><ul className="nav"><li className><a href="#Adding-Properties-With-Dot-Notation" title="Adding Properties With Dot Notation">Adding Properties With Dot Notation</a></li><li className><a href="#Adding-Properties-With-Bracket-Notation" title="Adding Properties With Bracket Notation">Adding Properties With Bracket Notation</a></li></ul></li><li className><a href="#Update-Values" title="Update Values">Update Values</a></li><li className><a href="#Removing-Properties" title="Removing Properties">Removing Properties</a></li><li className><a href="#List-Properties" title="List Properties">List Properties</a><ul className="nav"><li className><a href="#Bonus-Listing-Values" title="Bonus: Listing Values">Bonus: Listing Values</a></li></ul></li><li><a href="#Summary" title="Summary">Summary</a></li><li className><a href="#Extra-Resources" title="Extra Resources">Extra Resources</a></li></ul></li></ul></div><div className="toc-menu"><a className="expand-toggle" href="#">Expand all</a><a className="back-to-top" href="#">Back to top</a><a className="go-to-bottom" href="#">Go to bottom</a></div>
              </ul>
            </div>
          </div>
          <div id="ui-toc-affix" className="ui-affix-toc ui-toc-dropdown unselectable hidden-print" data-spy="affix" style={{top: 17, display: 'none'}}>
            <div className="toc"><ul className="nav"><li className><a href="#Basic-Data-Types-Object" title="Basic Data Types: Object">Basic Data Types: Object</a><ul className="nav"><li className><a href="#Learning-Goals" title="Learning Goals">Learning Goals</a></li><li className><a href="#Introduction" title="Introduction">Introduction</a></li><li className><a href="#Why-Should-We-Use-Objects" title="Why Should We Use Objects?">Why Should We Use Objects?</a></li><li className><a href="#Object-Definition" title="Object Definition">Object Definition</a><ul className="nav"><li className><a href="#Object-Example" title="Object (Example)">Object (Example)</a></li></ul></li><li className><a href="#Accessing-Values" title="Accessing Values">Accessing Values</a></li><li className><a href="#Adding-Properties-to-the-Object" title="Adding Properties to the Object">Adding Properties to the Object</a><ul className="nav"><li className><a href="#Adding-Properties-With-Dot-Notation" title="Adding Properties With Dot Notation">Adding Properties With Dot Notation</a></li><li className><a href="#Adding-Properties-With-Bracket-Notation" title="Adding Properties With Bracket Notation">Adding Properties With Bracket Notation</a></li></ul></li><li className><a href="#Update-Values" title="Update Values">Update Values</a></li><li className><a href="#Removing-Properties" title="Removing Properties">Removing Properties</a></li><li className><a href="#List-Properties" title="List Properties">List Properties</a><ul className="nav"><li className><a href="#Bonus-Listing-Values" title="Bonus: Listing Values">Bonus: Listing Values</a></li></ul></li><li><a href="#Summary" title="Summary">Summary</a></li><li className><a href="#Extra-Resources" title="Extra Resources">Extra Resources</a></li></ul></li></ul></div><div className="toc-menu"><a className="expand-toggle" href="#">Expand all</a><a className="back-to-top" href="#">Back to top</a><a className="go-to-bottom" href="#">Go to bottom</a></div>
          </div>
        </div>
      );
    };