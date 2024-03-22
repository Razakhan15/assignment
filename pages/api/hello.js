import forumData from "../../data/fourmData";

export default function handler(req, res) {
  res.status(200).json(forumData);
}
