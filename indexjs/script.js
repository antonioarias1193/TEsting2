// Data produk (contoh)
const products = [
	{
		name: "Adidas",
		type: "Cartoon Astronaut T-shirts",
		price: 19.99,
		image:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa2%2Fb7%2Fce%2Fa2b7cefb441c867735c19f1d7f542f72.png&f=1&nofb=1&ipt=cf94371a00a7c62c71b873a3a6f0be2a14d2b0da8590a4a6cc1dae07bbed9918&ipo=images",
	},
	{
		name: "Nike",
		type: "Yellow Polos T-shirts",
		price: 20.11,
		image:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgildan.my%2Fwp-content%2Fuploads%2F2020%2F02%2F76000B-24C-Gold.png&f=1&nofb=1&ipt=32ff44cf7eae5d2738ad07dcfbba52619a3b200a0fed443ada76737d8a5c78b1&ipo=images",
	},
	{
		name: "Romawi",
		type: "Black Cool Elegant",
		price: 10.54,
		image:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Ftshirt%2Ftshirt_PNG5427.png&f=1&nofb=1&ipt=1035986b69a76328b1fd25d8aa29c73d3317cd7efcba3c6007bce4e037efe5ca&ipo=images",
	},
];

// Ambil elemen kontainer produk
const productContainer = document.querySelector(".pro-container");

// Loop melalui produk dan tambahkan HTML ke kontainer
products.forEach((product) => {
	productContainer.innerHTML += `
	<div class="pro">
		<img src="${product.image}"
			width="200vw" alt="">
		<div class="des">
			<span>${product.name}</span>
			<h5>${product.type}</h5>
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
			<h4>$${product.price.toFixed(2)}</h4>
		</div>
		<div class="cart">
			<a href="#"><img width="30px"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fshopping_cart%2Fshopping_cart_PNG38.png&f=1&nofb=1&ipt=b54e79e5196cfc97e3ea578d7b419934e4372f2b413a11123aea3a6f062743b0&ipo=images"
					alt=""></a>
		</div>
	</div>
	`;
});
