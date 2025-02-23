frappe.listview_settings['SMS Queue'] = {
	get_indicator: function (doc) {
		var colour = {'Sent': 'green', 'Sending': 'blue', 'Not Sent': 'grey', 'Error': 'red', 'Expired': 'orange'};
		return [__(doc.status), colour[doc.status], "status,=," + doc.status];
	},
}
