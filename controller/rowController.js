import Product from "../models/model.js";

export const createTechnicalRowController = async(req, res) => {

    const { tspec, tunit } = req.body;
    const { id } = req.params;
    Product.findById(id)
        .then(product => {
            // Add button to send product ID
            product.technicals.push({
                tspec: tspec,
                tunit: tunit
            });

            // Save
            product.save()
                .then(() => console.log('Parameters added successfully'))
                .catch(err => console.error('Error saving parameters:', err));
        })
        .catch(err => console.error('Error finding product:', err));

}

export const createOrderingRowController = async (req, res) => {

    const { cat, desc, pack } = req.body;
    const { id } = req.params;
    Product.findById(id)
        .then(product => {
            // Add button to send product ID
            product.orderings.push({
                cat: cat,
                desc: desc,
                pack: pack
            });

            // Save
            product.save()
                .then(() => console.log('Parameters added successfully'))
                .catch(err => console.error('Error saving parameters:', err));
        })
        .catch(err => console.error('Error finding product:', err));
}

export const createConnectionRowController = async (req, res) => {

    const { cspec, cunit } = req.body;
    const { id } = req.params;
    Product.findById(id)
        .then(product => {
            // Add button to send product ID
            product.connections.push({
                cspec: cspec,
                cunit: cunit
            });

            // Save
            product.save()
                .then(() => console.log('Parameters added successfully'))
                .catch(err => console.error('Error saving parameters:', err));
        })
        .catch(err => console.error('Error finding product:', err));
}

export const createDimensionRowController = async (req, res) => {

    const { dspec, dunit } = req.body;
    const { id } = req.params;
    Product.findById(id)
        .then(product => {
            // Add button to send product ID
            product.dimensions.push({
                dspec: dspec,
                dunit: dunit
            });

            // Save
            product.save()
                .then(() => console.log('Parameters added successfully'))
                .catch(err => console.error('Error saving parameters:', err));
        })
        .catch(err => console.error('Error finding product:', err));
}

export const findIdController = async (req, res) => {

    const { dspec, dunit } = req.body;
    const { id } = req.params;
    const productId = await Product.findById(id)
        .catch(err => console.error('Error finding product:', err));
}