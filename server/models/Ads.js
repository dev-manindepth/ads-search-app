const mongoose = require('mongoose');


const adsSchema = mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.ObjectId,
      ref: "Company",
      required: true,
      text:true
    },
    primaryText: {
      type: String,
      trim: true,
      text:true,
    },
    headline: {
      type: String,
      trim: true,
      text:true
    },
    description: {
      type: String,
      trim: true,
      text:true,
    },
    cta: {
      type: String,
      trim: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  }
  // ,
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true },
  // }
);

const Ads=mongoose.model("Ads",adsSchema);
module.exports = Ads;