import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

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

export const trackPageView = async (userData = {}) => {
	try {
		const eventId = uuidv4();

		if (window.fbq) {
			window.fbq('track', 'PageView', {userData: userData}, {eventID: eventId});
		} else {
			console.log('Warning: fbq is not defined');
		}

		await sendConversionAPI('PageView', eventId, userData);

	} catch (e) {
		console.log('Error: ', e);
	}
}

export const trackAddToCart = async (product, userData) => {
	try {
		const eventId    = uuidv4(),
		      customData = {
			      content_ids:  [product.id],
			      content_type: 'product',
			      value:        product.price,
			      currency:     'UAH',
		      };

		if (window.fbq) {
			window.fbq('track', 'AddToCart', {
				content_ids:  [product.id],
				content_type: 'product',
				value:        product.price,
				currency:     'UAH',
				user_data:    userData,
			}, {eventID: eventId});
		} else {
			console.log('Warning: fbq is not defined');
		}

		await sendConversionAPI("AddToCart", eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
	}
}

export const trackInitiateCheckout = async (totalCost, items, userData = {}) => {
	try {
		const eventId    = uuidv4(),
		      customData = {
			      value:        totalCost,
			      currency:     'UAH',
			      content_ids:  items,
			      content_type: 'product',
		      };

		if (window.fbq) {
			window.fbq('track', 'InitiateCheckout', {
				value:        totalCost,
				currency:     'UAH',
				content_ids:  items,
				content_type: 'product',
				user_data:    userData,
			}, {eventID: eventId});
		} else {
			console.log('Warning: fbq is not defined');
		}

		await sendConversionAPI('InitiateCheckout', eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
	}
}

export const trackPurchase = async (totalCost, items, userData = {}) => {
	try {
		const eventId    = uuidv4(),
		      customData = {
			      value:        totalCost,
			      currency:     'UAH',
			      content_ids:  items,
			      content_type: 'product',
		      };

		if (window.fbq) {
			window.fbq('track', 'Purchase', {
				value:        totalCost,
				currency:     'UAH',
				content_ids:  items,
				content_type: 'product',
				user_data:    userData,
			}, {eventID: eventId});
		} else {
			console.log('Warning: fbq is not defined');
		}

		await sendConversionAPI('Purchase', eventId, userData, customData);
	} catch (e) {
		console.log('Error: ', e);
	}
}
