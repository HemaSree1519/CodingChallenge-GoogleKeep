output "eip" {
  value = "${aws_eip.googlekeep_ip.public_ip}"
}