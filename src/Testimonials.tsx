import './component_styles/testimonials.scss'

export default function Testimonials() {
	return (
		<div className="testimonials-container">
			<figure className="snip1390">
			  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
			  <figcaption>
			    <h2>Eleanor Crisp</h2>
			    <h4>Guitarist</h4>
			    <blockquote>I recently took my old guitar to the luthier for some much-needed repairs, and I was blown away by the results. Not only did they fix all the issues I was having, but my guitar now sounds and plays better than it ever has before.</blockquote>
			  </figcaption>
			</figure>
			<figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
			  <figcaption>
			    <h2>Gordon Norman</h2>
			    <h4>Guitarist</h4>
			    <blockquote>I had an amazing experience with the luthier. They were able to repair some serious damage to my violin that I thought would be irreversible. But they not only fixed the problem, they also gave my violin a beautiful new finish that makes it look like new again.</blockquote>
			  </figcaption>
			</figure>
			<figure className="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
			  <figcaption>
			    <h2>Sue Shei</h2>
			    <h4>Guitarist</h4>
			    <blockquote>I've been playing guitar for years and have had many instruments serviced by various luthiers. But I have to say that the work this luthier did on my guitar was some of the best I've ever seen. Their attention to detail and dedication to quality craftsmanship is truly impressive.</blockquote>
			  </figcaption>
			</figure>
		</div>
	)
}