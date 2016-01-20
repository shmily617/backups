# 说明
![icon](http://25.io/mou/Mou_128.png)
####此库主要用来备份平时学习中写的一些小模块，或者小函数，以便日后查看。
---
*学习*
**使用**
***强调***
___
    var a =1 
    var b =2
`helloworld.html`
> 引用教程
>> 二级引用

## 让 Git 全局性的忽略 .DS_Store
Mac 中每个目录都会有个文件叫.DS_Store, 用于存储当前文件夹的一些 Meta 信息。每次提交代码时，我都要在代码仓库的 .gitignore 中声明，忽略这类文件。  如下步骤可以实现**全局性忽略 .DS_Store**

1. 创建 ~/.gitignore_global 文件，把需要全局忽略的文件类型塞到这个文件里。
	
		# .gitignore_global
		####################################
		######## OS generated files ########
		####################################
		.DS_Store
		.DS_Store?
		*.swp
		._*
		.Spotlight-V100
		.Trashes
		Icon?
		ehthumbs.db
		Thumbs.db
		####################################
		############# packages #############
		####################################
		*.7z
		*.dmg
		*.gz
		*.iso
		*.jar
		*.rar
		*.tar
		*.zip
2. 在 ~/.gitconfig 中引入 .gitignore_global。这是我的.gitconfig 文件:

		[user]
    		name = liumengjie
    		email = 413868887@qq.com
		[push]
    		default = matching
		[core]
    		excludesfile = /Users/liumengjie/.gitignore_global

搞定了！在所有的文件夹下 .DS_Store .swp .zip 等文件类型会被 Git 自动忽略。
#### 这是第一次用markdown    参考的[教程](http://blog.csdn.net/skykingf/article/details/45536231)

