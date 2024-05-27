import greeksalad from "../llemon_asset/greekSalad.jpg"
import bruchetta from "../llemon_asset/bruchetta.jpg"
import lemonDessert from "../llemon_asset/lemonDessert.jpg"
import starImg from "../llemon_asset/star"
import me from "../llemon_asset/me.jpeg"
// import LightBackgroundColor from "./LightBackgroungColor";

export default function Home () {
	const specials = {
		greekSaladKey: {
			image: greeksalad,
			name: "Greek Salad",
            price: 12.99,
            description: "A greek salad with a side of lemon dressing A greek salad",
            // delivery: "Order a delivery",
		},
        bruchettaKey: {
			image: bruchetta,
			name: "Bruchetta",
            price: 5.99,
            description: "Bruchetta with a side of lemon dressing A greek salad",
            // delivery: "Order a delivery",
		},
        lemonDessertKey: {
			image: lemonDessert,
			name: "lemon Dessert",
            price: 5.00,
            description: "lemon Dessert with a side of lemon dressing A greek salad",
            // delivery: "Order a delivery",
		},
	}

	const imageSpecial = {
		height: 100,
	}

	const imageMeStar = {
		height: 50,
	}

	const imageAbout = {
		height: 250,
	}

	// const starObj = {
	// 	image: starImg,
	// }

	// const star = () => {
	// 	let starVar = ""
	// 	for (let i = 0; i < 5; i++) {
	// 		starVar += starObj.image
	// 	return starVar;
	// 	}
	// }


	return (
		<>
			<section className="l-r-padding bkground t-b-padding">
				<div className="article-block">
					<article className="page-name">
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
						<p>In relation to the latter item, put this in
						the content block as a button, so that,
						once clicked, the user is brought to
						another page where they can carry
						this task out. To do this, add a grey
						background and populate the block.</p>
						{/* <LightBackgroundColor /> */}
						<div>
							<button className="button">Reserve a table</button>
						</div>
					</article>
					<div>
						<img src={specials.greekSaladKey.image} alt="greek salad"/>
					</div>
				</div>
			</section>
			<hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
			<section className="l-r-padding t-b-padding">
				<div>
					<h1>Specials!</h1>
					<button >Online menu</button>
				</div>
				<article>
					<img src={specials.greekSaladKey.image} style={imageSpecial} alt="greek salad"/>
					<div>
						{specials.greekSaladKey.name}
						{specials.greekSaladKey.price}
					</div>
					<div>
                        {specials.greekSaladKey.description}
					</div>
				</article>
			</section>
			<section>
				<div>
					<h1>Testimonials</h1>
				</div>
				<article>
					<div>
						<h3>Rating: 
							<img src={starImg} alt="rating" />
						</h3>
					</div>
					<div>
						<img src={me} style={imageMeStar} alt="testimony"/>
						<h2>Excellent!</h2>
					</div>
					<div>
						<p><strong>Said:</strong></p>
						<p>This has been fun and interesting!</p>
					</div>
				</article>
			</section>
			<section>
				<article>
					<div>
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
					</div>
					<p>In relation to the latter item, put this in
					the content block as a button, so that,
					once clicked, the user is brought to
					another page where they can carry
					this task out. To do this, add a grey
					background and populate the block.</p>
					{/* <LightBackgroundColor /> */}
				</article>
				<div>
					<img src={me} style={imageAbout} alt="about"/>
				</div>
			</section>
		</>
	)
}