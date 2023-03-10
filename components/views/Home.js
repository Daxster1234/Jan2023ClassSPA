import html from "html-literal";

export default (state) => html`
<section id="jumbotron">
<h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
<a href="index.html">"Call to Action" "Button"</a>
</section>

<h3>Today's Weather</h3>
<p>Today's weather in ${state.weather.city} is ${state.weather.description}. It is ${state.weather.temp} degrees and feels like ${state.weather.feelsLike}.</p>`;
