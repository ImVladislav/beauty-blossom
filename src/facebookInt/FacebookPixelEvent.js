import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import CryptoJS from "crypto-js";

const TELEGRAM_BOT_TOKEN = '8273401211:AAF4LfnM9tlRpeAJPJjQgZQYYNedRYjYwlc';
const TELEGRAM_CHAT_ID = '-1002530863997';

export const trackPageView = async (userSelectors = {}) => {
	const eventId  = uuidv4(),
	      userData = getHashedUserData(userSelectors);

	if (window.fbq) {
		try {
			window.fbq('track', 'PageView', {userData: userData}, {eventID: eventId});
		} catch (e) {
			console.error('❌ Помилка відправки Pixel PageView події:', e);
		}
	} else {
		console.log('Warning: fbq is not defined');
	}

	try {
		await sendConversionAPI('PageView', eventId, userData);
	} catch (e) {
		console.log('Error: ', e);
		await sendTelegramMessage(`❌ Помилка (FacebookPixelEvent::trackPageView): ${e.message}\n\nStack:\n${e.stack}`);
	}
}

export const trackAddToCart = async (product, userSelectors) => {
	const eventId    = uuidv4(),
	      userData   = getHashedUserData(userSelectors),
	      customData = {
		      content_ids:  [product._id],
		      content_type: 'product',
		      value:        product.price,
		      currency:     'UAH',
	      };

	if (window.fbq) {
		try {
			window.fbq('track', 'AddToCart', {
				content_ids:  [product._id],
				content_type: 'product',
				value:        product.price,
				currency:     'UAH',
				user_data:    userData,
			}, {eventID: eventId});
		} catch (e) {
			console.error('❌ Помилка відправки Pixel AddToCart події:', e);
		}
	} else {
		console.log('Warning: fbq is not defined');
	}

	try {
		await sendConversionAPI("AddToCart", eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
		await sendTelegramMessage(`❌ Помилка (FacebookPixelEvent::trackAddToCart): ${e.message}\n\nStack:\n${e.stack}`);
	}
}

export const trackViewContent = async (product, userSelectors) => {
	const eventId    = uuidv4(),
	      userData   = getHashedUserData(userSelectors),
	      customData = {
		      content_ids:  [product._id],
		      content_type: 'product',
		      value:        product.price,
		      currency:     'UAH',
	      };

	if (window.fbq) {
		try {
			window.fbq('track', 'ViewContent', {
				content_ids:  [product._id],
				content_type: 'product',
				value:        product.price,
				currency:     'UAH',
				user_data:    userData,
			}, {eventID: eventId});
		} catch (e) {
			console.error('❌ Помилка відправки Pixel ViewContent події:', e);
		}
	} else {
		console.log('Warning: fbq is not defined');
	}

	try {
		await sendConversionAPI("ViewContent", eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
		await sendTelegramMessage(`❌ Помилка (FacebookPixelEvent::trackViewContent): ${e.message}\n\nStack:\n${e.stack}`);
	}
}

export const trackInitiateCheckout = async (totalCost, items, userSelectors = {}) => {
	const eventId    = uuidv4(),
	      userData   = getHashedUserData(userSelectors),
	      customData = {
		      value:        totalCost,
		      currency:     'UAH',
		      content_ids:  items,
		      content_type: 'product',
	      };

	if (window.fbq) {
		try {
			window.fbq('track', 'InitiateCheckout', {
				value:        totalCost,
				currency:     'UAH',
				content_ids:  items,
				content_type: 'product',
				user_data:    userData,
			}, {eventID: eventId});
		} catch (e) {
			console.error('❌ Помилка відправки Pixel InitiateCheckout події:', e);
		}
	} else {
		console.log('Warning: fbq is not defined');
	}

	try {
		await sendConversionAPI('InitiateCheckout', eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
		await sendTelegramMessage(`❌ Помилка (FacebookPixelEvent::trackInitiateCheckout): ${e.message}\n\nStack:\n${e.stack}`);
	}
}

export const trackPurchase = async (totalCost, items, userSelectors = {}) => {
	const eventId    = uuidv4(),
	      userData   = getHashedUserData(userSelectors),
	      customData = {
		      value:        totalCost,
		      currency:     'UAH',
		      content_ids:  items,
		      content_type: 'product',
	      };

	if (window.fbq) {
		try {
			window.fbq('track', 'Purchase', {
				value:        totalCost,
				currency:     'UAH',
				content_ids:  items,
				content_type: 'product',
				user_data:    userData,
			}, {eventID: eventId});
		} catch (e) {
			console.error('❌ Помилка відправки Pixel Purchase події:', e);
		}
	} else {
		console.log('Warning: fbq is not defined');
	}

	try {
		await sendConversionAPI('Purchase', eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
		await sendTelegramMessage(`❌ Помилка (FacebookPixelEvent::trackPurchase): ${e.message}\n\nStack:\n${e.stack}`);
	}
}

async function sendTelegramMessage(message) {
	try {
		await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
			chat_id: TELEGRAM_CHAT_ID,
			text:    message,
		});
	} catch (err) {
		console.error('Помилка надсилання в Telegram:', err.message);
	}
}

const sendConversionAPI = async (eventName, eventId, userData = null, customData = null) => {
	const payload = {
		event_name:       eventName,
		event_time:       Math.floor(Date.now() / 1000),
		event_id:         eventId,
		event_source_url: window.location.href,
	};

	if (userData != null) {
		payload.user_data = userData;
	}
	if (customData != null) {
		payload.custom_data = customData;
	}

	await axios.post('/conversion', payload);
};

function getHashedUserData(userSelectors) {
	const hashedUserData = {};

	if (userSelectors.em) {
		const em = userSelectors.em;
		hashedUserData.em = CryptoJS.SHA256(em.trim().toLowerCase()).toString();
	}
	if (userSelectors.ph) {
		const ph = userSelectors.ph;
		hashedUserData.ph = CryptoJS.SHA256(ph).toString();
	}
	if (userSelectors.fn) {
		const fn = userSelectors.fn;
		hashedUserData.fn = CryptoJS.SHA256(fn.trim()).toString();
	}
	if (userSelectors.ln) {
		const ln = userSelectors.ln;
		hashedUserData.ln = CryptoJS.SHA256(ln.trim()).toString();
	}

	return hashedUserData;
}