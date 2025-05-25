resource "aws_lambda_function" "list_products" {
  function_name    = "list-products"
  filename         = "lambda/product-list/list.zip"
  handler          = "index.handler"
  runtime          = "nodejs18.x"
  source_code_hash = filebase64sha256("lambda/product-list/list.zip")
  role             = aws_iam_role.lambda_role.arn
}
