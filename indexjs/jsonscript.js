$.getJSON("product.json", function (dataProducts) {
	let productjson = dataProducts.products;
	$.each(productjson, function (i, data) {
		$(".pro-container").append(
			`<div class="pro">
		<img src="` +
				data.image +
				`"
			width="200vw" alt="">
		<div class="des">
			<span>` +
				data.name +
				`</span>
			<h5>` +
				data.type +
				`</h5>
			<div class="star">
				<img src="http://sweetclipart.com/multisite/sweetclipart/files/big_gold_star.png" width="20px"
					alt="">
				<img src="http://sweetclipart.com/multisite/sweetclipart/files/big_gold_star.png" width="20px"
					alt="">
				<img src="http://sweetclipart.com/multisite/sweetclipart/files/big_gold_star.png" width="20px"
					alt="">
				<img src="http://sweetclipart.com/multisite/sweetclipart/files/big_gold_star.png" width="20px"
					alt="">
				<img src="http://sweetclipart.com/multisite/sweetclipart/files/big_gold_star.png" width="20px"
					alt="">
			</div>
			<h4>$` +
				data.price.toFixed(2) +
				`</h4>
		</div>
		<div class="cart">
			<a href="#"><img width="30px"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fshopping_cart%2Fshopping_cart_PNG38.png&f=1&nofb=1&ipt=b54e79e5196cfc97e3ea578d7b419934e4372f2b413a11123aea3a6f062743b0&ipo=images"
					alt=""></a>
		</div>
	</div>`
		);
	});
});
