output "list_products_endpoint" {
  value = "${aws_apigatewayv2_api.http_api.api_endpoint}/products"
}
