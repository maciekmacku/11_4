var SamsungS8 = new Phone ("Samsung", 2499 , "black" , 3000);
var iphone7 = new Phone ("Apple", 2699 , "spacegrey" , 1960);
var XiaomiMix2 = new Phone ("Xiaomi", 1999 , "black" , 3400);


function Phone (brand, price, color, battery) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.battery = battery;
}
Phone.prototype.printInfo = function()	{
	console.log("This phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " zł and battery capacity is " + this.battery + " mAh.");
}

XiaomiMix2.printInfo();