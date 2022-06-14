// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const tokenId = req.query.tokenId;

  const image_url = "https://raw.githubusercontent.com/nas11ai/NFT-Collection/main/my-app/public/itkcryptodevs/";

  req.status(200).json({
    name: "Cahyo Token" + tokenId,
    description: "An NFT of one of the best teacher in ITK",
    image: image_url + tokenId + ".svg",
  });
}
