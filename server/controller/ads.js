const Ads = require("../models/Ads");

exports.search = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await Ads.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
          // let: { companyName: { $toString: "$name" } },
          // pipeline: [
          //   {
          //     $match: {
          //       $expr: { $or: [{ $eq: ["$searchTerm", "$$companyName"] }] },
          //     },
          //   },
          // ],
        },
      },

      {
        $unwind: { path: "$company", preserveNullAndEmptyArrays: true },
      },
      // {
      //   $addFields: {
      //     companyName: "$company.name",
      //   },
      // },
      // {
      //   $match: {
      //     "company.name": {
      //       $regex: searchTerm,
      //       $options: "i",
      //     },
      //   },
      // },
      {
        $match: {
          $or: [
            // {
            //   companyName: {
            //     $regex: searchTerm,
            //     $options: "i",
            //   },
            // },
            {
              "company.name": {
                $regex: searchTerm,
                $options: "i",
              },
            },
            {
              headline: {
                $regex: searchTerm,
                $options: "i",
              },
            },
            {
              description: {
                $regex: searchTerm,
                $options: "i",
              },
            },
            {
              primaryText: {
                $regex: searchTerm,
                $options: "i",
              },
            },
          ],
        },
      },

      {
        $project: {
          __v: 0,
          "company.__v": 0,
        },
      },
    ]);

    res.status(200).json({status:"success",adsCount:result.length, ads:result});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAds = async (req, res) => {
  try {
    const newAds = await Ads.create(req.body);
    res.status(201).json({
      status: "success",
      data: newAds,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllAds = async (rer, res) => {
  try {
    const allAds = await Ads.find();
    res.status(200).json({
      status: "success",
      results: allAds.length,
      data: allAds,
    });
  } catch (err) {
    res.status(400).json({
      status: fail,
      message: err.message,
    });
  }
};
