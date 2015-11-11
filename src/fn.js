
app.pageType = ''

app.getPage = function () {
	var url = location.href
	if (url.contains('cart.taobao.com/cart.htm')) {
		this.pageType = 'cart'
	} else if (url.contains('buy.tmall.com/order/confirm_order.htm')) {
		this.pageType = 'confirm'
	}
}


app.cart = {
	init: function () {
		this._getElem()
		this._bind()
	},
	_getElem: function () {
		this.$body = $(document.body)
	},
	_bind: function () {
		this.$body.on('click', 'input.J_CheckBoxItem, input.J_CheckBoxShop', function (ev) {
			setTimeout(function () {
				$('a#J_Go').click()
			}, 800)
		})
	}
}

app.confirm = {
	init: function () {
		this._getElem()
		this._bind()
	},
	_getElem: function () {
		this.$body = $(document.body)
	},
	_bind: function () {
		this.$body.on('dblclick', function (ev) {
			$('input[type=checkbox]#couponCard_1').click()
			setTimeout(function () {
				var val = $('#J_RealPay').text()
				val = parseFloat(val) * 100
				$('input#J_CouponInput').val(val)
			}, 500)

		})
	}
}

app.init = function () {
	this.getPage()
	//if (this.pageType === 'cart') this.cart.init()
	if (this.pageType === 'confirm') this.confirm.init()
}
