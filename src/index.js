import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Headling from './components/headling/headling';

const headling = new Headling();
headling.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
	console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
	console.log('Development mode');
} else {
	console.log('None mode');
}

helloWorldButton.methodThatDoesNotExists();
