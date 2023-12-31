var mediaData = {
  audioPath: "https://jxzy-dmxy.jxstnu.edu.cn/",  
  imageUrl:["images/myFace1.jpg","images/myFace2.jpg","images/myFace3.jpg","images/myFace4.jpg","images/myFace5.jpg","images/backgroundImage.jpg"],
  names:["刘子欣","鄢佳文","曾志彤","谢礼翔","唐恒彬"],
  audioFiles: [
    {fileName:["linuxCMD-3.mp3" ],
     titles : ["Explore the system","The next heading is Switch Options, parameters."," One-character format","Run the less command to view the file content.","Take a guided tour","symlinks","hard-wired","summary"] ,
     time:[ [5,585] ,[585,1457] , [1457,2248] ,[2249,3984],[3985,5490],[5491,6487],[6488,6561],[6561,6766]],
     content:[
      ["  怎么探索我们听他说，前面我们学习我们知道，如何在文件系统跳转，说的就是cd命令。现在到了对UNIX系统做一个有指导的观光、导游。在我们开始之前，你要旅游的话你要学更多的技能。这些命令就会在我们学习的途中更加有有用。这里给出了三条命令，ls命令：把文件夹中、目录中内容给列出来（文件和文件夹）；file决定文件的类型，ls看文件的内容，这是两个概念....."],
      ["  这两个东西刚开始学的时候，我们会放在一起，现在来区分一下。这件事让我们理解了一个非常重要的观点，你能够理解大多数命令究竟是怎么工作的，理解他内部的原理，一般来说命令后面都跟着一条或者更多的开关、选项。这个选项用来修改他们命令的行为，还可以增加一个或多个参数，这样这些项目就会提供给命令让给他们来操作...."],
      ["  我们前面看到的，这个l这个选项就可以导致这个结果按长的格式显示出来，一个文件夹列出一行详细的信息。这个格式可包含一大堆的有用的信息。/rw可读可写，文件一般以/开头,文件夹以d开头。我们从其中一个文件详细了解大概一个详细的信息是什么意思。Rwr-----这个的意思是：你对这个文件的访问权限（读、写、删除..."],
      ["纵观整个Linux系统，有很多文件都是文本格式，就连记事本都是一个纯文本编辑器 less命令查看文件允许我们回滚内容，如果内容太多，我们可以向上（b）向下（space）翻页，按q退出该命令。"],
      ["  整个Linux的文件布局和其他类似Linux系统的布局比较像，都是按照同一个设计标准。（拷贝技巧：左键双击复制，中键粘贴） 进行旅游时，尝试以下命令：cd/文件名 ls -l   列出文件目录 file   查看文件类型 less   查看文件内容  在游览时不用担心会把文件搞乱，多多尝试，不要被吓到...."],
      ["  当我们查看时，可能会看到这样一个目录列表：lrwxrwxrwx 1 root root 11 2018-08-11 07:34 libc.so.6 -> libc-2.6.so 我们注意上列目录有两个文件名，这称为符号连接（也称为软连接）。在大多数类似unix的系统中，可以使用多个名称引用一个文件。虽然它的价值可能并不明显，但它确实是一个很有用的特性......."],
      ["  硬连接也允许文件有多个名称，但它们以不同的方式进行操作。我们将在下一章中更多地讨论符号连接和硬连接之间的区别。"],
      ["  随着我们的旅程，我们学到了很多关于我们系统的知识。我们已经看到了各种文件和目录及其内容。你应该从中得到的一件事是这个系统有多开放。在Linux中，有许多重要的文件都是人类可读的纯文本。与许多专有系统不同，Linux使所有东西都可供检查和学习....."]
    ],
    }, {fileName:["cs2.mp3" ],
    titles : ["第二章","滴文章","lalal","sdadsdad","The next heading is Switch Options, parameters.","Take a guided tour","symlinks","hard-wired"] ,
    time:[ [5,585] ,[585,1457] , [1457,2248] ,[2249,3984],[3985,5490],[5491,6487],[6488,6561],[6561,6766]],
    content:[
      ["  sdfd2"],
      [" juj 2"],
      ["fh2hjghj "],
      ["2hfg gfhgfgf"],
      [" 2getretbvhy "],
      ["2gdftrhfgnvcb "],
      ["2ercvrxvgh"],
      [" 2 "],
    ],
    },  {fileName:["cs7.mp3" ],
    titles : ["第三","The next heading is Switch Options, parameters."," One-character format","Run the less command to view the file content.","Take a guided tour","symlinks","hard-wired","summary"] ,
    time:[ [5,585] ,[585,1457] , [1457,2248] ,[2249,3984],[3985,5490],[5491,6487],[6488,6561],[6561,6766]],
    },  {fileName:["cs1.mp3" ],
    titles : ["第四","The next heading is Switch Options, parameters."," One-character format","Run the less command to view the file content.","Take a guided tour","symlinks","hard-wired","summary"] ,
     time:[ [5,585] ,[585,1457] , [1457,2248] ,[2249,3984],[3985,5490],[5491,6487],[6488,6561],[6561,6766]],
    }],
  videoPath: "https://jxzy-dmxy.jxstnu.edu.cn/tedVideos/",
  videoFiles: ["v02004040000bpa9p3egncoejcefuv4g.mp4", "v02004090000brsni7sd1drb1sobjjl0.mp4", "v02004g10000c62vh53c77u7s0g8bpeg.mp4", "v020040a0000bqvdpsl7gl1ko381hedg.mp4", "v020040c0000bti2etclja68ljgh9o30.mp4", "v02004g10000c62vhrbc77uaqj1qbmbg.mp4", "v02004140000bojvtckr08m3ineu8o90.mp4", "v02004g10000c62vkvjc77u6s0801teg.mp4", "v02004170000bnabtdr6j2ql9flksu30.mp4", "v02004g10000c62vl6bc77udn5psmn3g.mp4", "v020041a0000bq8kab5p06vufte9gk5g.mp4", "v02004g10000c62vm0bc77u1cuqnk8e0.mp4", "v020041e0000bnabvqom4ciq1tkrpgu0.mp4", "v02004g10000c62vmp3c77u9oiijo690.mp4", "v02004220000bnk9nkgm4cioajs247ig.mp4", "v02004g10000c62vnfbc77ub99epl7dg.mp4", "v02004250000bmnsaj9dli3rj0fo4v7g.mp4", "v02004g10000c62vo2rc77u1nrn8lgbg.mp4", "v020042c0000bqa0eeij2bouk4hiuitg.mp4", "v02004g10000c62vojjc77ucbokpae40.mp4", "v020042f0000bsbsuceg08joaideip6g.mp4", "v02004g10000c62vpf3c77u7or2pecqg.mp4", "v02004390000bjus27g697atl8skbmng.mp4", "v02004g10000c62vrhrc77uckgmm92p0.mp4", "v02004440000bsv7mdjlvmvitaj7f9g0.mp4", "v02004g10000c62vsljc77u9oiijujh0.mp4", "v02004470000bphs39o697ap32u4ktgg.mp4", "v02004g10000c630ls3c77ub8bf0brp0.mp4", "v020044f0000bru9bgjc86dmn38v38s0.mp4", "v02004g10000c630rfjc77u2pkcl6kr0.mp4", "v02004590000br6kb6k81ukk6s5n7n00.mp4", "v02004g10000c630sa3c77ufpliulk40.mp4", "v020045a0000bmqgqpdds13crlsmbibg.mp4", "v02004g10000c630slrc77ubsack6ncg.mp4", "v02004710000brm74cvibktq7tfr4m70.mp4", "v02004g10000c630srrc77ubsack6tqg.mp4", "v02004770000bn6keiaepr1cf84pn8m0.mp4", "v02004g10000c6317h3c77ub99eqonu0.mp4", "v02004770000bpkqbkk1n3e10rmkd9og.mp4", "v02004g10000c631tsbc77u6etsudo2g.mp4", "v02004810000bpblkkq7u0r5d52f8td0.mp4", "v02004g10000c6321ajc77u6etsuhf10.mp4", "v02004830000bsbb9p2r56qcebd05v6g.mp4", "v02004g10000c648i43c77u2u7qb50e0.mp4", "v02004910000bkemdd27u0r2cv3gvnq0.mp4", "v02004g10000c648jabc77ubsadrmmdg.mp4", "v02004930000bpchrbs1n3e6vfb91j5g.mp4", "v02004g10000c64983jc77u0j3v5vfeg.mp4", "v020049f0000brm73vtjfrmhhdfcu62g.mp4", "v02004g10000c649rcrc77u6pkh35ft0.mp4", "v02004a40000bproefir863oaub47slg.mp4", "v02004g10000c64beprc77u7ulu7u3l0.mp4", "v02004a40000bproicl7gl1h25fgjoeg.mp4", "v02004g10000c64bf53c77u43f7mrha0.mp4", "v02004a50000bpmepbubn5v2f7sn39og.mp4", "v02004g10000c64bfk3c77u96irv78b0.mp4", "v02004a80000bn2mnkonrm1ii1qe45bg.mp4", "v02004g10000c64c3h3c77u74i8i5390.mp4", "v02004ac0000bt20l8lo827ubql9vlt0.mp4", "v02004g10000c64ceb3c77u27fjs0tg0.mp4", "v02004b40000bnac1ktjfrmsnk5rbis0.mp4", "v02004g10000c64dvk3c77u40bkavjm0.mp4", "v02004b40000bo039k481ukr122vand0.mp4", "v02004g10000c64e1fjc77u1mcul10t0.mp4", "v02004b70000bqud520697aqhcmfabr0.mp4", "v02004g10000c64e1o3c77u0k67o8fo0.mp4", "v02004b70000bqud654qs4skvnoev5k0.mp4", "v02004g10000c64e29bc77u08to73glg.mp4", "v02004c40000bnk9mra0ifkspps8uu80.mp4", "v02004g10000c64ebnjc77u0u6tin2s0.mp4", "v02004c50000bpmejdm4tqbt4g4qiis0.mp4", "v02004g10000c64ecsjc77u0fsou1200.mp4", "v02004c70000boqg8q7eqk81somj37fg.mp4", "v02004g10000c64ed3rc77u7g8l1iqug.mp4", "v02004d00000bmt55akd1dr6lo7cgo40.mp4", "v02004g10000c64eejbc77u0u6tiqfdg.mp4", "v02004d90000bjam8rg7q8i1sd06mda0.mp4", "v02004g10000c64em4bc77u6s09gdvcg.mp4", "v02004e10000blqa44o858lv6e4b9kpg.mp4", "v02004g10000c64emfjc77udflk91trg.mp4", "v02004e20000bpmegl6vld7bj4d1qdug.mp4", "v02004g10000c65id1bc77u0u6unbvug.mp4", "v02004ed0000bkbdi5aikatv305g7900.mp4", "v02004g10000cdoj7ijc77u0q6r7n770.mp4", "v02004f40000bpgcqf51mikbqkhojceg.mp4", "v0201ag10000caikc13c77udap1dkdb0.mp4", "v02004f50000bo4unvc1n3e1folem2r0.mp4", "v030041b0000bti2edngvt0hel3lsi4g.mp4", "v02004f50000bs6m8l0ar5621po9otig.mp4", "v03004330000bthktosocj9e1v35br7g.mp4", "v02004g10000c5rrhhrc77u1fhfj73lg.mp4", "v03004350000bt20q1ugoh6r1clid6pg.mp4", "v02004g10000c5rrikbc77u4rdiknfog.mp4", "v03004460000bka2l6v298s08t0hphhg.mp4", "v02004g10000c5rt0erc77ud097i9ka0.mp4", "v03004640000bkpuvncif32jk9ngddig.mp4", "v02004g10000c5sagp3c77uek0luucag.mp4", "v03004680000bt20mqnosmd9g3h47s5g.mp4", "v02004g10000c5saktjc77u8lgv86de0.mp4", "v03004680000bt20mqnosmd9g3h47s6g.mp4", "v02004g10000c5sbrurc77ubkoc49260.mp4", "v03004840000bsu95l75v4d5074lsmbg.mp4", "v02004g10000c5sgd13c77u7jlevn55g.mp4", "v03004910000bthl32n0l8p81ftmoggg.mp4", "v02004g10000c62f0njc77u4tq54oqog.mp4", "v03004ac0000blvk5nlm8tc7dcuu06ag.mp4", "v02004g10000c62uptrc77u43f69kg8g.mp4", "v03004bc0000bsvn9t4ev9gkf10h1880.mp4", "v02004g10000c62uuljc77u0gu6e3kvg.mp4", "v03004d00000bthlir3l6nk41dnmaog0.mp4", "v02004g10000c62uv03c77u9fhlj12gg.mp4", "v03004d60000bt20j7df254l6aff4t6g.mp4", "v02004g10000c62v3brc77ue7t1llv50.mp4", "v03004d70000bthlcn7758ubifbbdbl0.mp4", "v02004g10000c62vdgrc77u5gmkj5s50.mp4", "v03004f50000bk9dkvqbr0fl17dvm6rg.mp4"],
};