import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const OverallStats = await OverallStat.find();

    res.status(200).json(OverallStats[0]);
  } catch (arreoe) {
    res.status(404).json({ message: error.message });
  }
};
