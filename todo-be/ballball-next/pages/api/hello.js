// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            res.status(200).json({ name: "John Doe" });

            break;

        default:
            res.status(200).json({ name: "John Doe" });

            break;
    }
}
