import moxios from 'moxios';

import StateController from './StateController';

describe('StateController', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('Get Return fronm Api', (done) => {

		moxios.wait(() => {
			let request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					"AC": {
						"aluguel": 770,
						"compra": 61600
					},
					"AL": {
						"aluguel": 670,
						"compra": 53600
					},
					"AP": {
						"aluguel": 600,
						"compra": 48000
					},
					"AM": {
						"aluguel": 880,
						"compra": 70400
					},
					"BA": {
						"aluguel": 880,
						"compra": 70400
					},
					"CE": {
						"aluguel": 770,
						"compra": 61600
					},
					"DF": {
						"aluguel": 1360,
						"compra": 108800
					},
					"ES": {
						"aluguel": 990,
						"compra": 79200
					},
					"GO": {
						"aluguel": 780,
						"compra": 62400
					},
					"MA": {
						"aluguel": 790,
						"compra": 63200
					},
					"MT": {
						"aluguel": 880,
						"compra": 70400
					},
					"MS": {
						"aluguel": 700,
						"compra": 56000
					},
					"MG": {
						"aluguel": 1000,
						"compra": 80000
					},
					"PA": {
						"aluguel": 1000,
						"compra": 80000
					},
					"PB": {
						"aluguel": 1000,
						"compra": 80000
					},
					"PR": {
						"aluguel": 980,
						"compra": 78400
					},
					"PE": {
						"aluguel": 1000,
						"compra": 80000
					},
					"PI": {
						"aluguel": 710,
						"compra": 56800
					},
					"RJ": {
						"aluguel": 1390,
						"compra": 111200
					},
					"RN": {
						"aluguel": 810,
						"compra": 64800
					},
					"RS": {
						"aluguel": 1030,
						"compra": 82400
					},
					"RO": {
						"aluguel": 990,
						"compra": 79200
					},
					"RR": {
						"aluguel": 870,
						"compra": 69600
					},
					"SC": {
						"aluguel": 1030,
						"compra": 82400
					},
					"SP": {
						"aluguel": 1440,
						"compra": 115200
					},
					"SE": {
						"aluguel": 730,
						"compra": 58400
					},
					"TO": {
						"aluguel": 880,
						"compra": 70400
					},
				},

			});
		});


		StateController.getStates()
			.then((res) => {
				res.should.have.to.a('array');
				res.should.have.not.length(0);
				done();
			})
			.catch(error => done(error));
	});
});
