import footlogo from '../llemon_asset/Asset 18@4x.png'

export default function Footer () {
	return (
        <footer className='footer'>
			<img src={footlogo} alt="footer logo" />
			<div className='footer-div'>
				<div>
					<p>
						<span>Copyright © 2021</span><br></br>
						<span>Lemon Restaurant</span><br></br>
						<span>All rights reserved</span><br></br>
						<span>Privacy Policy</span><br></br>
						<span>Terms of Service</span><br></br>
					</p>
				</div>
				<div>
					<p>
						<span>Social media:</span><br></br><br></br>
						<span><a href='www.facebook.com'>facebook</a></span><br></br>
						<span><a href='www.twitter.com'>twitter</a></span><br></br>
						<span><a href='www.linkedin.com'>linkedin</a></span>
					</p>
				</div>
				<div>
					<p>
						<span>Address:</span><br></br>
						<span>123 Main Street City</span><br></br>
						<span>State 12345</span><br></br>
						<span>Phone: 123-456-7890</span><br></br>
						<span>Fax: 123-456-7890</span><br></br>
						<span>Email: 123-456-7890</span><br></br>
						<span>Hours: 123-456-7890</span>
					</p>
                </div>
			</div>
		</footer>
    );
}