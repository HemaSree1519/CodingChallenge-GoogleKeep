output "eip" {
  value = "${aws_eip.googlekeep_ip.public_ip}"
}
output "endpoint" {
  value = "${aws_instance.web_server.public_dns}"
}