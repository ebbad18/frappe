frappe.pages['recorder'].on_page_load = function(wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Recorder',
		single_column: true
	});

	frappe.recorder = new Recorder(wrapper);
	$(wrapper).bind('show', function() {
		frappe.recorder.show();
	});
};

class Recorder {
	constructor(wrapper) {
		this.wrapper = $(wrapper);
		this.container = this.wrapper.find('.layout-main-section');
		this.container.append($('<div class="recorder-container"></div>'));
	}

	show() {
		frappe.require('/assets/js/frappe-recorder.min.js');
	}
}
