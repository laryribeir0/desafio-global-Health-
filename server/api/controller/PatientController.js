const repository = require('../model/Patient.js');

class PatientController {
  async create(req, res) {
    try {
      const patient = req.body;
      const result = await repository.create(patient);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        details: {
          name: 'Bad Request',
          description: error.message,
        },
      });
    }
  }

	async read(req, res) {
		try {
      const payload = req.query;
			const result = await repository.find(payload);

			return res.status(200).json(result);
		} catch (error) {
      return res.status(400).json({
        details: {
          name: 'Bad Request',
          description: error.message,
        },
      });
		}
	}

  async readId(req, res) {
		try {
      const { id } = req.params;
			const result = await repository.findById(id);

			return res.status(200).json(result);
		} catch (error) {
      return res.status(400).json({
        details: {
          name: 'Bad Request',
          description: error.message,
        },
      });
		}
	}

  async update(req, res) {
		try {
      const { id } = req.params;
      const payload = req.body;

			const result = await repository.findByIdAndUpdate(id, payload, { new: true });

			return res.status(200).json(result);
		} catch (error) {
      return res.status(400).json({
        details: {
          name: 'Bad Request',
          description: error.message,
        },
      });
		}
	}

  async delete(req, res) {
		try {
      const { id } = req.params;

			 await repository.findByIdAndDelete(id);

			return res.status(204).end();
		} catch (error) {
      return res.status(400).json({
        details: {
          name: 'Bad Request',
          description: error.message,
        },
      });
		}
	}

}

module.exports = PatientController;