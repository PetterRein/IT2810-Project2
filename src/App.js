import React from 'react';
import './App.css';
import Display from 'components/Display'
import DisplayTabs from 'components/DisplayTabs'
import MediaChooser from 'components/MediaChooser'

function App() {
  return (
    <div className="App">
	  <head>
		  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	  </head>

	  <header className="App-header">
		  <div class="header_bar">
			  <h3 class="head_text">Project 2</h3>
		  </div>
	  </header>
	  <body>
	  <div class="row">
		  <div class="c4">
			  <div class="page_box">
				  <div class="box_header tabbed">
					  <DisplayTabs />
				  </div>
				  <div class="box_content">
					<Display />
				  </div>
			  </div>
		  </div>
		  <div class="c2">
			  <div class="page_box">
				  <div class="box_header">
					<h3>Medievalg</h3>
				  </div>
				  <div class="box_content">
					  <MediaChooser />
				  </div>
			  </div>
		  </div>
	  </div>
	  </body>
	  <footer>
		  <p>Gruppe 40 - Webutvikling Høsten 2019</p>
	  </footer>
    </div>
  );
}

export default App;
