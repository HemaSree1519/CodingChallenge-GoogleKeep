# How to setup

###Tech-Stack
1) Terraform
2) Ansible
3) Spring boot
4) Reactjs
5) Bootstrap
6) Nginx
7) AWS RDS Aurora (mysql) database

#### Terraform
Terraform is used to define and provision AWS infrastructure required for google keep application.

- Change directory to /aws/terraform/EC2/
- Run terraform init
- Run terraform plan
- Enter aws_access_key and aws_secret_key
- Run terraform apply
- Again enter aws_access_key and aws_secret_key

**Note**: Please note ***public_ip*** and ***endpoint*** resulted from output of terraform.

#### Ansible
Ansible is user for google keep application deployment.

- Change directory to /aws/ansible/
- Run ansible-vault edit deploy/hosts
- Edit the EC2 instance endpoint and private key
- Copy public_ip to /client/src/utilities/server_AWS.js
- Run ansible-playbook deploy/pre_installations.yml --ask-vault-pass
- Enter ansible-vault password
- Check the database configuration at /src/main/resources/application.properties
- Run ansible-playbook deploy/google_keep_app.yml --ask-vault-pass

#### Finally
Once everything went good, you can start exploring **Google Keep** at ***public_ip*** provisioned.
