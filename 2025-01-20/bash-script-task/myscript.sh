#!/bin/bash

#Task 1: Directory Management
cd /home
sudo chmod 755 user #modifying permission of directory
cd user
mkdir project_files #creation of directory

ls -l #verification of directory creation

#Task 2 : User and Group Management
sudo groupadd developers #creation of group
sudo useradd intern_user #creation of user
sudo usermod -aG developers intern_user #assigning the user to the group
sudo passwd intern_user #assigning password to the user

cat /etc/group #verification of group & user creation and assignment of user in the group

#Task 3: Permissions and Ownership
sudo chown intern_user:developers project_files #Change the ownership of the "project_files" directory to "intern_user" and group "developers"
sudo chmod 750 project_files #owner can read,write and execute, group can read and execute and others have no permission

ls -l #verification of permission and ownership changes

#Task 4: Additional Tasks
cd /home/user/project_files
sudo touch welcome.txt  #creation of welcome text


