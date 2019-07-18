// Means Type casting
let message;
message = "amar is god";

// one way
let endWithD = (<string>message).endsWith('d');

// another way

let endWithd = (message as string).endsWith('d');