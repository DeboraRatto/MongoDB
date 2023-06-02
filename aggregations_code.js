[
  {
    $lookup:
      {
        from: "Montadoras",
        localField: "montadora",
        foreignField: "montadora",
        as: "Montadoras",
      },
  },
  {
    $project:
      {
        "Montadoras._id": 0,
        "Montadoras.montadora": 0,
      },
  },
  {
    $unwind:
      {
        path: "$Montadoras",
      },
  },
  {
    $group:
      {
        _id: "$Montadoras.país",
        Carros: {
          $push: "$$ROOT",
        },
      },
  },
]