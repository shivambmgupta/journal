class Validators {

	static validEmail(email) {
		email = email.trim();
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	static validPassword(password) {
		if (password.length < 5) {
			return false;
		}
		return true;
	}

	static passwordPolicy(password) {
		let passRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/;
		return passRegex.test(password);
	}
	
	static isEmpty(name) {
		name = name + ''.trim();
		if (name && name !== '') {
			return false;
		}
		return true;
	}

	static isDigit(digit) {
		var re = /^\d+$/;
		return re.test(digit);
	}

	static isValidMobileNumber(mobileNumber) {
		var re = /^\d+$/;
		return re.test(mobileNumber) && mobileNumber.length == 10;
	}

	static isAlphabet(name) {
		var re = /^[a-zA-Z]*$/;
		return re.test(name);
	}

	static isAlphabetWithSpace(name) {
		var re = /^[a-zA-Z, ]*$/;
		return re.test(name);
	}

	static isTextUnderLimit(text, limit) {
		return text.length <= limit;
	}

	static isValidFacebookLink(text) {
		var re = /http(?:s)?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_]+)/
		return re.test(text);
	}

	static isValidTwitterLink(text) {
		var re = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/
		return re.test(text);
	}

	static isValidLinkdedinLink(text) {
		var re = /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/
		return re.test(text)
	}

}


export default Validators;