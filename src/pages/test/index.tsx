// import { api } from "~/utils/api";

// const index = () => {
//   const seedUsers = api.user.seedUsers.useMutation({
//     onError: () => {
//       alert("Error");
//     },
//     onSuccess: () => {
//       alert("Success");
//     },
//   });

//   return (
//     <div>
//       <button
//         onClick={async () => {
//           await seedUsers.mutateAsync(users);
//         }}
//         className="text-white"
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default index;

// const users = [
//   {
//     email: "nnm22am053@nmamit.in",
//     password: "8001392dd99d",
//     hashedPassword:
//       "$2b$12$i73jhTXoYP0s3iqkFqn0ru6So7jSUfK1crbvTK1mlpOJzNrn1Uii.",
//     phone: 9945672655,
//     name: "NNM22AM053 SHARANYA KUNDAR",
//   },
//   {
//     email: "nnm22cc070@nmamit.in",
//     password: "c97365a06c8b",
//     hashedPassword:
//       "$2b$12$Q5gtyCRA0nhL9hs0yK24XuTTojE46GgLw4bwWi9nyfPbTyw6BJY/i",
//     phone: 7364017107,
//     name: "NNM22CC070 Soham Misra",
//   },
//   {
//     email: "nnm22am009@nmamit.in",
//     password: "fcef7f74f353",
//     hashedPassword:
//       "$2b$12$zhSf947rEWScqWw3wmP6C.W5VHquPrqVV1PTYcZFJda9Fh15WU9o.",
//     phone: 8310673086,
//     name: "NNM22AM009 ASHISH HEBBAR",
//   },
//   {
//     email: "nnm23cs185@nmamit.in",
//     password: "df7616105c9f",
//     hashedPassword:
//       "$2b$12$LYmQR2QqTA5lds1tHp9sCeYaJmuPc8yppZxRDu4lCKTfzfz/GqoYG",
//     phone: 8861337830,
//     name: "Shishir Karkera",
//   },
//   {
//     email: "nnm22ri029@nmamit.in",
//     password: "c11ac5d7880a",
//     hashedPassword:
//       "$2b$12$1kHeMtxIcAR9Z5FDVbrco.NEJ9DwDTvF3HYA3lzUwrorr2nl8qQKS",
//     phone: 9972803118,
//     name: "NNM22RI029 MOHAMMED MAHEER",
//   },
//   {
//     email: "nnm23me060@nmamit.in",
//     password: "030e97b46d36",
//     hashedPassword:
//       "$2b$12$Ja6PM0i3AiFsoXlRXcDIie5AN44PJH7IWAao2kzCcaPG8UaoCCCuO",
//     phone: 9019128464,
//     name: "NNM23ME060 VINEETH ACHARYA",
//   },
//   {
//     email: "nnm23cs083@nmamit.in",
//     password: "d2ecea3bceb4",
//     hashedPassword:
//       "$2b$12$qyd1wUZPavMCTYRxvdnvI.q36wpbTc4PqNIYEuQe4DGM1B44AcSNa",
//     phone: 9606738589,
//     name: "NNM23CS083 HIMANSHU POOJARY",
//   },
//   {
//     email: "nnm23cs144@nmamit.in",
//     password: "6d9790c7ed25",
//     hashedPassword:
//       "$2b$12$pzaiPSfYq4RmRk4FvZ2ufO/IL//q6G7DmlZN3UR7BaMezBpbDXuay",
//     phone: 8050338576,
//     name: "NNM23CS144 RAHUL N BANGERA",
//   },
//   {
//     email: "nnm23cs006@nmamit.in",
//     password: "086b13446746",
//     hashedPassword:
//       "$2b$12$dOGijZF.spbPr1TmWXl5AOJGpEmOskeAykjKIjLSC0MbLRfeO8l/.",
//     phone: 9686145752,
//     name: "NNM23CS006 ABHIRAM N UDUPA",
//   },
//   {
//     email: "nu23c24@nmamit.in",
//     password: "c2c99708ae05",
//     hashedPassword:
//       "$2b$12$/YP7NteAO0h0iLSJuZnVcOZoLQ.GcXDbVGyN4elB1Cr9St7llqYXG",
//     phone: 8097768347,
//     name: "NNM23CS183 SHETTY ISHAN GANESH",
//   },
//   {
//     email: "nnm22ri066@nmamit.in",
//     password: "2dabf7657396",
//     hashedPassword:
//       "$2b$12$saTf208aZ3FXuguUvR/TvufnkrzgBXiHW67KMS9DH4Ygqz69h6H/K",
//     phone: 9866057375,
//     name: "NNM22RI066 SWASTHI SHETTY",
//   },
//   {
//     email: "nnm23am055@nmamit.in",
//     password: "8a86543d50b4",
//     hashedPassword:
//       "$2b$12$FRJZvBAEC3wP4RNLFIQLw.88qAxVkucItp8eTM9u.9JrpXPJgX4ru",
//     phone: 8310556184,
//     name: "NNM23AM055 SAMPANNA",
//   },
//   {
//     email: "nu23f02@nmamit.in",
//     password: "83ef5d8e7274",
//     hashedPassword:
//       "$2b$12$KkDgT9LkJBkCtco./Az8gOAeagshYBo0y5pXttis0GHzPcatOAcmu",
//     phone: 8431748027,
//     name: "NU23F02 HARSHITHA P SALIAN",
//   },
//   {
//     email: "nnm23cs085@nmamit.in",
//     password: "8257d71a8b8a",
//     hashedPassword:
//       "$2b$12$.pVJEcXSMyIt5X61cWlO2.Re2OEmTS0o1oE352ieZmB4z33wohSwK",
//     phone: 8197629955,
//     name: "NNM23CS085 JANVI HEGDE",
//   },
//   {
//     email: "nnm22ri059@nmamit.in",
//     password: "8cfa84694bf6",
//     hashedPassword:
//       "$2b$12$LFn3YXkKQAH7QUu7O8XUYOJfrDnaYVXbfVG6ZHNOeQGhs5tVdBdEq",
//     phone: 7892302897,
//     name: "NNM22RI059 SIRI HEGDE",
//   },
//   {
//     email: "nnm23am014@nmamit.in",
//     password: "b09842f2fd28",
//     hashedPassword:
//       "$2b$12$Pd27hwBHEYSj6KhAx3c4qO0tGt.0nR0XcNSxvDDWuXGanVToDP1d2",
//     phone: 9518307223,
//     name: "NNM23AM014 ARYAN SINGH",
//   },
//   {
//     email: "nnm23ad065@nmamit.in",
//     password: "fcdfecf0a9cf",
//     hashedPassword:
//       "$2b$12$zvU0IGKCWG77qYb1BTY00O9CclihXDPKEG3B8jHI6g/ONdfPxKzre",
//     phone: 9008213107,
//     name: "NNM23AD065 SUSHAN SHETTY",
//   },
//   {
//     email: "nnm23ad048@nmamit.in",
//     password: "ba7b415e6a90",
//     hashedPassword:
//       "$2b$12$DxXbI9GJW4jl29Nf9l7R0OWDKRdHGKpqWLwSKGDcH2aoW4OFjF.JO",
//     phone: 9901287342,
//     name: "NNM23AD048 SAMAR RIHAN",
//   },
//   {
//     email: "nnm23cs024@nmamit.in",
//     password: "4321ae4e27fa",
//     hashedPassword:
//       "$2b$12$cpUspjF7dUNJQv1qhgXvG.QQUUiDxE5qzI/u0gHjulU/9bAXfs2tq",
//     phone: 6360896863,
//     name: "NNM23CS024 AMULYA G R",
//   },
//   {
//     email: "nnm23cs084@nmamit.in",
//     password: "924edf6a46ca",
//     hashedPassword:
//       "$2b$12$hZjFhGW0ZNRd9TYmBhD3XeSxRVhilZwlTUfuyj73gKI2og35uxeo2",
//     phone: 8660807227,
//     name: "NNM23CS084 HITHESH H G",
//   },
//   {
//     email: "nnm22ad034@nmamit.in",
//     password: "3a3597b771aa",
//     hashedPassword:
//       "$2b$12$PrHvkd71KvM3QoHP4kMloO8USkhGhqY1CbYzmSsdvaD.wl8tiIGdy",
//     phone: 8762283051,
//     name: "NARASIMHA M PAI",
//   },
//   {
//     email: "nnm23ec002@nmamit.in",
//     password: "cc31a8e15ad8",
//     hashedPassword:
//       "$2b$12$9zRBlJVEXeK4nBxCXgYHu.lU3Rsdxf5uqOxwxss2OCz2dUcy9pASK",
//     phone: 7204470517,
//     name: "NNM23EC002 ABHIRAM",
//   },
//   {
//     email: "nnm23cs277@nmamit.in",
//     password: "88b009a61303",
//     hashedPassword:
//       "$2b$12$hFbF2EeXa6RghNiaf5tMtOS/uYLsptIw8eyKaWjQpW..uxUsUotpO",
//     phone: 9611226210,
//     name: "Pruthvi .P. Shetty",
//   },
//   {
//     email: "nnm22cs162@nmamit.in",
//     password: "6455ed44be80",
//     hashedPassword:
//       "$2b$12$E6SbE/IuoFuEcpwB/OfCbObE5DCITecdYCw0/o3xaRyAU7yS/VCjy",
//     phone: 8105832544,
//     name: "Shashank P H",
//   },
//   {
//     email: "nnm23ad052@nmamit.in",
//     password: "426698bc0aad",
//     hashedPassword:
//       "$2b$12$CUg7Me/mWt0ffSiWA1ZXrO1hcR2hB.ePYfWawxz2XIbJopQ5ixjnW",
//     phone: 6366768890,
//     name: "NNM23AD052 SHARVA DHANVI V",
//   },
//   {
//     email: "nnm23ad054@nmamit.in",
//     password: "a81150813c06",
//     hashedPassword:
//       "$2b$12$m3e/BoomgU06M7opukLbG.J3xJnZtqEMrMJrRDnJB2nhxDEJ8/xGW",
//     phone: 8217477176,
//     name: "NNM23AD054 SHAUN MARVELL RODRIGUES",
//   },
//   {
//     email: "nnm23cs207@nmamit.in",
//     password: "3ee712e98079",
//     hashedPassword:
//       "$2b$12$Cx5SFeoPvAdwNSdlXrr1v.Q/U8bDOo0FbmdOR2czXHge7GtZr7Gl2",
//     phone: 9380569865,
//     name: "NNM23CS207 SUJAN S",
//   },
//   {
//     email: "nnm22cs018@nmamit.in",
//     password: "8949551a8b5a",
//     hashedPassword:
//       "$2b$12$QRuirOa.4CZPbnHEuye4r.N.dFzzGjcT9zhuEqN.kVQAn8bLYypzS",
//     phone: 9035655107,
//     name: "NNM22CS018 AMEESH MITHANTHAYA",
//   },
//   {
//     email: "nnm22ec206@nmamit.in",
//     password: "c33e5efc9ca4",
//     hashedPassword:
//       "$2b$12$DFOXNQT7/5.dKIHP5WugcO3tpAXVoc41G2Yw8KS7W6T8wGwyy2xli",
//     phone: 9353425512,
//     name: "NNM22EC206 VINEETH KUMAR JAIN",
//   },
//   {
//     email: "nnm23am020@nmamit.in",
//     password: "911094b4d058",
//     hashedPassword:
//       "$2b$12$C503qQMK7XkZ3mvnEhty5OJhx1ydF.thHkIyn5FzOuqJd1veshXGG",
//     phone: 8867222665,
//     name: "NNM23AM020 GAURAV DHANRAJA",
//   },
//   {
//     email: "nnm23cs258@nmamit.in",
//     password: "dba6399eb519",
//     hashedPassword:
//       "$2b$12$OvpG4W2Kedlr3ipD64AJF.hHDV99TORVJmZt4qdcbk.P/W1M73glG",
//     phone: 9900687558,
//     name: "NNM23CS258 LAREN PINTO",
//   },
//   {
//     email: "nnm22cc010@nmamit.in",
//     password: "68be6861854e",
//     hashedPassword:
//       "$2b$12$ZApKfJyK8MVLre3vZKbEfuR1hWJ5jxq15QxLOnRl4wAnOXUSEYQyO",
//     phone: 9148315234,
//     name: "NNM22CC010 CARREN RUSSEL DIAS",
//   },
//   {
//     email: "nnm22ad061@nmamit.in",
//     password: "56f1cdf74e1d",
//     hashedPassword:
//       "$2b$12$LQflPlILsozfSPO9C7sl8ualowF.KxMMjMhyv8Vn2o6pg.lCz5BOO",
//     phone: 9108476693,
//     name: "NNM22AD061 TEJAS P NAIK",
//   },
//   {
//     email: "nnm23cs184@nmamit.in",
//     password: "9fe781e81dd6",
//     hashedPassword:
//       "$2b$12$lwuhigOWpW.JKfJASUnDreEdP7b8cP59HcvdiEEgNT6VUWln8QVKi",
//     phone: 7349054329,
//     name: "NNM23CS184 SHISHIR D",
//   },
//   {
//     email: "nnm22cs093@nmamit.in",
//     password: "7226929932b3",
//     hashedPassword:
//       "$2b$12$9JrFH67Vn1E.fi/4GN2uH.WtzRROymB.dUkEFdqH6c8whWrz0fhnK",
//     phone: 8779607430,
//     name: "NNM22CS093 KUNDER VARUN MOHAN",
//   },
//   {
//     email: "nnm22is024@nmamit.in",
//     password: "0d901ef29ed6",
//     hashedPassword:
//       "$2b$12$4bbyH6X5zQifS/lpdMiDrO2KwrJyyXUsGh7hTf6.k74m1fRKtz0V6",
//     phone: 8050215837,
//     name: "NNM22IS024 ARYAN SHENOY",
//   },
//   {
//     email: "nnm23is179@nmamit.in",
//     password: "00e04eec8305",
//     hashedPassword:
//       "$2b$12$uZaOpyuVNIvuPc8aeX35YeVJbP1LACXFPmk4DU1jtW2mdXGQNQwyy",
//     phone: 9686666597,
//     name: "NNM23IS179 SIMRAN KASIM SAYED",
//   },
//   {
//     email: "nnm23am061@nmamit.in",
//     password: "bfcc8f1750d9",
//     hashedPassword:
//       "$2b$12$KL0aSt80cfojCQ60nLSkAOKSgz9OOP/XyWVbYVBKNqXtDu01yIITW",
//     phone: 9945615767,
//     name: "NNM23AM061 SHARVIN DMELLO",
//   },
//   {
//     email: "nnm22is001@nmamit.in",
//     password: "dbb469f9f025",
//     hashedPassword:
//       "$2b$12$/.M4zTAnOfDNHhl/yW8vQ.I6oUT8mqK4tHWkQy9N3q0BUWLnWe.8K",
//     phone: 9611582998,
//     name: "NNM22IS001 A DHAME AMUTHAN",
//   },
//   {
//     email: "nnm22cs030@nmamit.in",
//     password: "3b30417dd63a",
//     hashedPassword:
//       "$2b$12$KJIz7MtEGGUhEx5WGn2mKOQwL.ToWmA9nBl/yqnYwAB10rgDfzva6",
//     phone: 9480368737,
//     name: "NNM22CS030 ANUP RAJESH PRABHU",
//   },
//   {
//     email: "nnm23cs245@nmamit.in",
//     password: "14098d40dc20",
//     hashedPassword:
//       "$2b$12$kcEqzNkiJakFvQZ7D5mMheZrKfUH3gOTNfXJxKsorLgqtJ25M.Dme",
//     phone: 8762256023,
//     name: "NNM23CS245 ANUP C",
//   },
//   {
//     email: "nnm22am039@nmamit.in",
//     password: "3a2152b9e361",
//     hashedPassword:
//       "$2b$12$Bt5rfQFkXbcIvPuns82GgumKpQA5SEqA8AxxzmvJyYUEA7h9EvfOO",
//     phone: 9019079780,
//     name: "NNM22AM039 PRATHAM A KADEKAR",
//   },
//   {
//     email: "nnm23cs127@nmamit.in",
//     password: "ea97dd3f0492",
//     hashedPassword:
//       "$2b$12$OdOW93xAqOFQRzKlZA0zcuaRKf7/V2rOoVQXwFxnqGjBmxSz0Orwq",
//     phone: 9103223823,
//     name: "NNM23CS127 PRABLEEN KOUR",
//   },
//   {
//     email: "nnm22is196@nmamit.in",
//     password: "6a333d6a7c49",
//     hashedPassword:
//       "$2b$12$tewI6XYXDs51VJwM3KVtheE4GU0Lo.afUgEb5o7OCEhDe4uY4lYsK",
//     phone: 9731751855,
//     name: "NNM22IS196 VAJAPEYAYAJULA SREELASYA",
//   },
//   {
//     email: "nnm23cs071@nmamit.in",
//     password: "43601fb41c33",
//     hashedPassword:
//       "$2b$12$wTCHlqR02WaICUhTDyCqI.xnHcqiSpFhlFtF.f2J.NeB.UmzhDnmq",
//     phone: 8123564938,
//     name: "NNM23CS071 ELVIN EDWIN RODRIGUES",
//   },
//   {
//     email: "nnm23cs193@nmamit.in",
//     password: "56b823b20d70",
//     hashedPassword:
//       "$2b$12$gfYImOlJfV7Sek6/dD6NBeHfRFgB0jwqBhBxzQXt.MtXYHanX2O3.",
//     phone: 9686027456,
//     name: "NNM23CS193 SHREYAS GOWDA K",
//   },
//   {
//     email: "nnm23cs133@nmamit.in",
//     password: "4e9fa0cf77d0",
//     hashedPassword:
//       "$2b$12$1pzFHQnsaDvNhI6YhhNUPOY3h8hT9rUT0X9tDr2HXFXmFaMnKyeN6",
//     phone: 9945244310,
//     name: "NNM23CS133 PRAKYATH ASHOK SHETTY",
//   },
//   {
//     email: "nnm22cs010@nmamit.in",
//     password: "c5ab36cf0f51",
//     hashedPassword:
//       "$2b$12$TiBvqWms4TNBiYnD3WJQX.3CpvsaGc8o7cbrvHtAdqXEMQXMxOyOO",
//     phone: 6360685241,
//     name: "NNM22CS010 ADITHYA SHENOY",
//   },
//   {
//     email: "nnm22is209@nmamit.in",
//     password: "d240ec57d5bf",
//     hashedPassword:
//       "$2b$12$NZ4reiVAylpDoFTiVaDheeD345NpoMnDjEFk4pagMuWHO/B5Uly72",
//     phone: 8792051827,
//     name: "NNM22IS209 Sthuthi",
//   },
//   {
//     email: "nnm23cs076@nmamit.in",
//     password: "51821c05cfb3",
//     hashedPassword:
//       "$2b$12$v8cJiR.o841qdOc7pQPw3.8UT5nJevsEfiI931FVI.oryYuv7HBUW",
//     phone: 9964213566,
//     name: "NNM23CS076 GANESH KALGUTKAR",
//   },
//   {
//     email: "nnm22is004@nmamit.in",
//     password: "1a85a84d9796",
//     hashedPassword:
//       "$2b$12$dBzBERpPy7w1kBZkRpBd..CDn70jrjiXU40/Z2zgGcGuk49uKBkmC",
//     phone: 8095996949,
//     name: "NNM22IS004 ABHAY J SHETTY",
//   },
//   {
//     email: "nnm22ri060@nmamit.in",
//     password: "8062132d06e3",
//     hashedPassword:
//       "$2b$12$2hp8wc.PdYlxg2NbtecLUesAaYk0EF76MkAJSmONhabAAnP/Tk8Ea",
//     phone: 7026283462,
//     name: "NNM22RI060 SNEHAL SHETTY",
//   },
//   {
//     email: "nnm23ac034@nmamit.in",
//     password: "10f4f80b8309",
//     hashedPassword:
//       "$2b$12$yhOKKAKd.Z4FKjaXGEOjae9O/o4m/yFNj0R8RPJJ9hG/vfb5MmcXi",
//     phone: 9632392885,
//     name: "NNM23AC034 MOHAMMED FARHAN RIAZ",
//   },
//   {
//     email: "nnm22is085@nmamit.in",
//     password: "e8de1ab166bc",
//     hashedPassword:
//       "$2b$12$SywIHOro3TbdeP7lhleFOufka2Hpzmev.I4BPA0o5ncEUz7.Ff5xG",
//     phone: 9481122449,
//     name: "NNM22IS085 MAHATHEE K",
//   },
//   {
//     email: "nnm22cs150@nmamit.in",
//     password: "1ac211aa8f8b",
//     hashedPassword:
//       "$2b$12$5q6uvcsMyKHbe3Ky5baEcerFwSuK8SMx3rweoE8BIz/4qmNW.x79i",
//     phone: 7760353214,
//     name: "NNM22CS150 SAHANA H S",
//   },
//   {
//     email: "nnm23is189@nmamit.in",
//     password: "6e04bddaa6e5",
//     hashedPassword:
//       "$2b$12$.HKJ7dLHtxHU2uRAtGV3Be0772qKdPGpVcJixeIso.wj4k9VEQWQu",
//     phone: 8197045983,
//     name: "NNM23IS189 SUMUKHA RAO H",
//   },
//   {
//     email: "nnm23ad071@nmamit.in",
//     password: "c921217efc1a",
//     hashedPassword:
//       "$2b$12$J5W6UgZxR0UpbIyiqU9YT.XxtjmJcfWw5to/K1pGxcKzPh0mjzwsK",
//     phone: 9483293009,
//     name: "NNM23AD071 YASH V MAURYA",
//   },
//   {
//     email: "nnm22is141@nmamit.in",
//     password: "df1012994722",
//     hashedPassword:
//       "$2b$12$eKj.K/t7a26h5fc9KrftC.F0PSUagLB2YU4V/.SfWCJaAOm.XHda6",
//     phone: 9535293027,
//     name: "NNM22IS141 SANYA SHRESTA JATHANNA",
//   },
//   {
//     email: "nnm22is133@nmamit.in",
//     password: "36da4a8a5e7a",
//     hashedPassword:
//       "$2b$12$Pw7w/1r/O5bsOGflFrdpg.//Ons1VSDCGOBw1dP7KCpPC3gkOLUvq",
//     phone: 9945414763,
//     name: "NNM22IS133 SAANVI U",
//   },
//   {
//     email: "nnm23cs043@nmamit.in",
//     password: "825dcabdc7a8",
//     hashedPassword:
//       "$2b$12$2Sx0u5VyF8qvGy1dIhQLUO.ypoPx7XBGxlDWaDO1Fi4uE2U1VCf0W",
//     phone: 8050294777,
//     name: "NNM23CS043 ASHWIN ARUN",
//   },
//   {
//     email: "nnm23ad072@nmamit.in",
//     password: "38708de05c5c",
//     hashedPassword:
//       "$2b$12$j9sF4ZptNN4VKlvNkZPWGuuQUf0V2z4/SA8Q.HlQXXj3nVG3RfUUm",
//     phone: 7975313784,
//     name: "NNM23AD072 YASHAS SHETTY",
//   },
//   {
//     email: "nnm23ad017@nmamit.in",
//     password: "2413095e91ba",
//     hashedPassword:
//       "$2b$12$461iqp3W.s7HM3qMcAwpuOIQNMJH1c77o4.qjv1a6B8/3AzB77F7e",
//     phone: 8317409031,
//     name: "NNM23AD017 CHANDAN",
//   },
//   {
//     email: "nnm23ad050@nmamit.in",
//     password: "cae47da7aa7b",
//     hashedPassword:
//       "$2b$12$kcIF7I3em35yC9HfRm.9/.3k7HDBvn6FRupX2oyZ1.2CapLGAz4vq",
//     phone: 8867224671,
//     name: "NNM23AD050 SANJANA",
//   },
//   {
//     email: "nnm23is185@nmamit.in",
//     password: "05c8476e07b0",
//     hashedPassword:
//       "$2b$12$AhgF1RE7oY9EcmW7CRERI.F/Yjv4POijwI/QDi43novB.WozufnKy",
//     phone: 7019386805,
//     name: "NNM23IS185 SRINIDHI D S",
//   },
//   {
//     email: "nnm22ri009@nmamit.in",
//     password: "3d52c3a5fbef",
//     hashedPassword:
//       "$2b$12$xs3mctj2n1GLraLtjwhHAOhDhWTwUqsPhAjpB/slJpTItnMxhqA8y",
//     phone: 8904533606,
//     name: "NNM22RI009 AFRAZ AHMED",
//   },
//   {
//     email: "nnm23cs146@nmamit.in",
//     password: "9887c3b382e3",
//     hashedPassword:
//       "$2b$12$tRdbadcZ7Pe1LudmZtbPBeDMfT03USzb2M9rZKojaBTgF0QaAjEgu",
//     phone: 9481140801,
//     name: "NNM23CS146 RAJATH S SHET",
//   },
//   {
//     email: "nnm23cs125@nmamit.in",
//     password: "c4daa7f06f02",
//     hashedPassword:
//       "$2b$12$4Wj9VeQ1eP9Fl1OD9vc8HeQkxssDkPKkAvB7nZkeR7ufOrd6KA2ri",
//     phone: 8277406222,
//     name: "NNM23CS125 POORVI KALYANI",
//   },
//   {
//     email: "nnm23cs123@nmamit.in",
//     password: "54e479b9e8f6",
//     hashedPassword:
//       "$2b$12$A811LMQ4R21M5q6NLhOJmOZpR53cx3WIUA5mX8P3kaCse2MqVRbze",
//     phone: 9482924280,
//     name: "Parimi Saketh Kumar",
//   },
//   {
//     email: "nnm23ad059@nmamit.in",
//     password: "ec3159d86f9e",
//     hashedPassword:
//       "$2b$12$hVag5mC/eVNZ/LtbvMrkvunK.oGFMf80nWvtWot/ZXi0IhHjpQv7u",
//     phone: 6362068718,
//     name: "NNM23AD059 SHRIDEVI BHAT",
//   },
//   {
//     email: "nnm22cs056@nmamit.in",
//     password: "f1d3a65b3b3f",
//     hashedPassword:
//       "$2b$12$NNZn1X8kt6lrBZrBP9e4Cu2uaOV/aVF3yZBuSfxYnk2y7.gHkMbFS",
//     phone: 8431821930,
//     name: "NNM22CS056 DEEKSHA RAMACHANDRA",
//   },
//   {
//     email: "nnm22is203@nmamit.in",
//     password: "868a52ea7758",
//     hashedPassword:
//       "$2b$12$APRN4XxN1fFPVaaQdzDw1.tXenAUaP6oYRYW6ZHFcL3iZfQ3SqtmS",
//     phone: 7411004271,
//     name: "NNM22IS203 VISHNU BHAT",
//   },
//   {
//     email: "nu23a10@nmamit.in",
//     password: "294e3c405ce6",
//     hashedPassword:
//       "$2b$12$uRN/G5VtqFSqPewrq9kyqusTxpbz.O4OkwcnU/dOzKthKrmGWAbfu",
//     phone: 9606226091,
//     name: "ADITHYA A",
//   },
//   {
//     email: "nnm23am025@nmamit.in",
//     password: "127c3b19f957",
//     hashedPassword:
//       "$2b$12$aJ22k7jXJ2ZF7uOxxWLkJexHHiuMkGDDNLPLwi/b6p9GgXKxhzMOK",
//     phone: 6364631483,
//     name: "NNM23AM025 KEERTHAN K",
//   },
//   {
//     email: "nnm23cb044@nmamit.in",
//     password: "45a6803a8449",
//     hashedPassword:
//       "$2b$12$guRPklZQOvVRS9N14Vx0deI1CFZsytKR8b3pL.pje4tNwIJMLWHmC",
//     phone: 9001759355,
//     name: "NNM23CB044 RISHI BHATI",
//   },
//   {
//     email: "nnm23ac055@nmamit.in",
//     password: "8c4057cd75e6",
//     hashedPassword:
//       "$2b$12$o06b4namaMKgLFfZSRJbMuJZU36jFEMEQIilXEatCARgFvJNVV8lS",
//     phone: 8296595662,
//     name: "NNM23AC055 VANSHI ROHITHAKSHA SALIAN",
//   },
//   {
//     email: "nnm22am021@nmamit.in",
//     password: "5ad630a4adb4",
//     hashedPassword:
//       "$2b$12$8QoLqQuPIlTJxQgZOnkvQeSwscDuffoKZfKyayY.i8xnUxNhy.M86",
//     phone: 9972566684,
//     name: "NNM22AM021 HITHESH",
//   },
//   {
//     email: "nnm23ad060@nmamit.in",
//     password: "0e8c7bbdff5c",
//     hashedPassword:
//       "$2b$12$4vh3PAHJGHHvO6ne9VSOGuk0KLFGtzbzy/U403UHwFUXb/YEFCEF6",
//     phone: 9380487567,
//     name: "NNM23AD060 SOURAV PATIL",
//   },
//   {
//     email: "nnm23cv501@nmamit.in",
//     password: "cb1d9b3b8cd9",
//     hashedPassword:
//       "$2b$12$M0D.QSgbhiOATVH77RFtYuV3d6n6xN.IBoTYZUFu57NXj3iqbH9R2",
//     phone: 7447262600,
//     name: "NNM23CV501 AMEEZ ASHFAQ SAYED",
//   },
//   {
//     email: "nnm23is167@nmamit.in",
//     password: "9e3232b837b2",
//     hashedPassword:
//       "$2b$12$.KK7UkyBWHZu1a7SsilHy.YXTECjlWQNeSeQOnCykxWw81CUqZLCW",
//     phone: 6362039043,
//     name: "NNM23IS167 SHAKTHA K",
//   },
//   {
//     email: "nnm23cs110@nmamit.in",
//     password: "91c59fe382b4",
//     hashedPassword:
//       "$2b$12$d5IBJ73/x8rrkeIHILkPx.UNj.jP4389FX8OWMi6r5Bc/JyTLulbW",
//     phone: 6362969943,
//     name: "NNM23CS110 MITHESH R SHETTY",
//   },
//   {
//     email: "nnm23cs238@nmamit.in",
//     password: "49d15fb1fe1b",
//     hashedPassword:
//       "$2b$12$znCvLoIOVhUdF/CUT4./1.G0B5s8c6NDpr/2C0QNR1jKkQPS0MIXO",
//     phone: 9262857521,
//     name: "NNM23CS238 AAYUSH KUMAR SINHA",
//   },
//   {
//     email: "nnm22ri018@nmamit.in",
//     password: "3dc5b4f87e97",
//     hashedPassword:
//       "$2b$12$oLZ0smZBjjfr5kxaF.4GauR1D7Hs9IMAe13KxbB0pArQpzczOPljq",
//     phone: 9702755651,
//     name: "NNM22RI018 DSOUZA ALREYA AGNELLO",
//   },
//   {
//     email: "nnm22is148@nmamit.in",
//     password: "e2bb75f4825c",
//     hashedPassword:
//       "$2b$12$dpi2Icfq9azeeF1Di9FxPeCPYsKPhlhjOPoKyEor4iDKa2QKDbryy",
//     phone: 9964196664,
//     name: "NNM22IS148 SHACHI RAVINDRA HEGDE",
//   },
//   {
//     email: "nnm23cs286@nmamit.in",
//     password: "55291c5bbd8d",
//     hashedPassword:
//       "$2b$12$DcWCqVLi2Nxk2KVEeaZE5.INZX63mxsIw4Qshu7XsLdXk/WSUZ/Ci",
//     phone: 9380208949,
//     name: "NNM23CS286 SHRINIDHI M SHETTY",
//   },
//   {
//     email: "nnm23is192@nmamit.in",
//     password: "a8a2d4841d1e",
//     hashedPassword:
//       "$2b$12$IJskZuwkrfchrZCoBDQBnukFIuEaBWx1ugFJhlOGkxTiAWvNqncVO",
//     phone: 8217325710,
//     name: "NNM23IS192 SWATI PRABHU",
//   },
//   {
//     email: "nnm23ad042@nmamit.in",
//     password: "d6f9d1745bef",
//     hashedPassword:
//       "$2b$12$d9j6Wf.IMhObDJREXXYCCe1ZDdof2CXL6Qlbdz1YFyWAY1m/qA3zG",
//     phone: 8762920252,
//     name: "NNM23AD042 RASHMITHA R NAYAK",
//   },
//   {
//     email: "nnm23cs132@nmamit.in",
//     password: "daea4571cb6d",
//     hashedPassword:
//       "$2b$12$jwMHojdZRdiwGtgke/fDKe3ZOIfRNWVV15mwuo7hTUthTQNuQFWNy",
//     phone: 9902646179,
//     name: "NNM23CS132 PRAJWAL INNA",
//   },
//   {
//     email: "nnm23cs172@nmamit.in",
//     password: "c856912ff58f",
//     hashedPassword:
//       "$2b$12$xgdhmgAgz4Mni8uZ9lTUVOHPo2xiIcMXujOyqPZvTlLTwEyIZQNWy",
//     phone: 9740224105,
//     name: "NNM23CS172 SHALDON BARNES",
//   },
//   {
//     email: "nnm23is074@nmamit.in",
//     password: "c6be6abd2666",
//     hashedPassword:
//       "$2b$12$re10g9Zhpg2dGyYpGqJxEuucPd/El77Mz9q6xgqn.cdKEzQ5Ln602",
//     phone: 7019712521,
//     name: "NNM23IS074 H NIHAL SHETTY",
//   },
//   {
//     email: "nnm22ri022@nmamit.in",
//     password: "c8d3ae85b806",
//     hashedPassword:
//       "$2b$12$.ueNwfSkUSGtigEQYL2gUOab8/u2NOlmEQkXpj5TxVB67..YTPBlm",
//     phone: 7899036688,
//     name: "NNM22RI022 HITHA KOTIAN",
//   },
//   {
//     email: "nnm23is018@nmamit.in",
//     password: "ea64a8418a2e",
//     hashedPassword:
//       "$2b$12$zvVmjyvx.E9.KnmAuSsgMe13vNL4MVFjGRzzwlF9UIgE7l5PmeWK.",
//     phone: 6364201535,
//     name: "NNM23IS018 ANVITH A POOJARY",
//   },
//   {
//     email: "nnm23is017@nmamit.in",
//     password: "a9f7294216b8",
//     hashedPassword:
//       "$2b$12$wCNf5t5MwYdUALDgubrhgO1G816F8nA.1Kt26kznSlQcjR.Qynol.",
//     phone: 8073950889,
//     name: "NNM23IS017 ANUSH SADASHIVA SHETTY",
//   },
//   {
//     email: "nnm23ad502@nmamit.in",
//     password: "917ef3b3ba2b",
//     hashedPassword:
//       "$2b$12$/iDOWcK0grMpuIMpHJ9U8.C8nnDb9Jq1hxIVXfMQEX6TD98Hg834S",
//     phone: 9740637206,
//     name: "NNM23AD502 PRAKASH L WADDAR",
//   },
//   {
//     email: "nnm23cs285@nmamit.in",
//     password: "b50738ed3e5d",
//     hashedPassword:
//       "$2b$12$lCttKi0gQuzvNqDolInSMu.lPnXK.4CmfnUMEh9ZSGJmotH4TStae",
//     phone: 9686224280,
//     name: "NNM23CS285 SHARAVI B SHETTY",
//   },
//   {
//     email: "nnm22cs151@nmamit.in",
//     password: "8b056df9492a",
//     hashedPassword:
//       "$2b$12$m0C3XnL9AEGAgArfokzQz.d8G9iBkoY24.GyvrOSB9I80y.6TcZfe",
//     phone: 9148460636,
//     name: "NNM22CS151 SAHITH SUNDARA POOJARY",
//   },
//   {
//     email: "nnm23bt013@nmamit.in",
//     password: "c6711106e897",
//     hashedPassword:
//       "$2b$12$tYqgjxTaT70L5CVMuEiXJOYPKQ6ZlpRO4epujR7T9rzvPtNEr7ide",
//     phone: 7975036081,
//     name: "NNM23BT013 DYUTHISHREE",
//   },
//   {
//     email: "nnm22am032@nmamit.in",
//     password: "4d293bd2747e",
//     hashedPassword:
//       "$2b$12$LTiGJMQyPA4qa424JH7efeagLD4k.M3m6oOGFi.eZKqRYSP6.Oaai",
//     phone: 8971351004,
//     name: "NNM22AM032 NAGAVARAPU SAARVARI",
//   },
//   {
//     email: "nnm22ad054@nmamit.in",
//     password: "3dfa6011bc87",
//     hashedPassword:
//       "$2b$12$8v/z540MCNHqqT756ZzrsuMnEA7AMX7IgFP.qREVrc2HvhLXSw3US",
//     phone: 9019850921,
//     name: "SHREEVATHSA R TANTRY",
//   },
//   {
//     email: "nnm23am006@nmamit.in",
//     password: "4774063fb58a",
//     hashedPassword:
//       "$2b$12$O1xaEy5MEZ89BMYwtXGGG.97teKO8x3YB3FyEL71sx5QKG09olzd2",
//     phone: 7483596355,
//     name: "NNM23AM006 ANANYA SHETTY",
//   },
//   {
//     email: "nnm23is201@nmamit.in",
//     password: "a582b71b58c0",
//     hashedPassword:
//       "$2b$12$vEVocf490vkNMhjM6AjL5eF014xgggAS2TqMcJhCnmECX544/al.O",
//     phone: 9108748522,
//     name: "NNM23IS201 UJWAL HEGDE",
//   },
//   {
//     email: "nnm23is072@nmamit.in",
//     password: "c2104b7a4b3a",
//     hashedPassword:
//       "$2b$12$BHVnK39xIZnlzpWQ6yeOR.afWFYt2bfj7sT5KGV23/CKSlr9O7L0O",
//     phone: 7483070985,
//     name: "NNM23IS072 GOWRIKA V ALVA",
//   },
//   {
//     email: "nnm23cs163@nmamit.in",
//     password: "8dcd09cf1807",
//     hashedPassword:
//       "$2b$12$YjNrU6FOjmLSgW6WH.rDn.SeakBwuuuEDGUc8g2ffs2xqiDHORkYi",
//     phone: 8660140735,
//     name: "NNM23CS163 SAHANA S ACHARYA",
//   },
//   {
//     email: "nnm23cs086@nmamit.in",
//     password: "732eac517eea",
//     hashedPassword:
//       "$2b$12$ZF1CoA2WMFreu6d.Wms0k.JcxPAAmaE/JJRwyelgAMyTvuT4XxsZW",
//     phone: 8848093232,
//     name: "NNM23CS086 JESMITHA K",
//   },
//   {
//     email: "nnm23cb049@nmamit.in",
//     password: "a49d8d40da6d",
//     hashedPassword:
//       "$2b$12$DRRWyN8y/jJ1XW13/Z1RFe1aaljzYd4y02X76tM8oLD8QxJxFlv12",
//     phone: 7619545988,
//     name: "NNM23CB049 SHAAMAK MADHWARAJ BOLAR",
//   },
//   {
//     email: "nu23d29@nmamit.in",
//     password: "00baf18650e0",
//     hashedPassword:
//       "$2b$12$RJN3/EVxuZt1g1Vberzq9ewVwStHSS/NwkcR3mqXxdxlXgnyfx/oS",
//     phone: 7975114169,
//     name: "NU23D29 NIDHI S SHETTY",
//   },
//   {
//     email: "nnm22ad011@nmamit.in",
//     password: "d83558edf3de",
//     hashedPassword:
//       "$2b$12$1aOtwmeMz/GC8iExl./fwu2IccjNFYh9aM76/59tW7n/dfUURx2eG",
//     phone: 8050750781,
//     name: "NNM22AD011 ANKITHA",
//   },
//   {
//     email: "nnm23cc007@nmamit.in",
//     password: "003c027a541b",
//     hashedPassword:
//       "$2b$12$/g1RjedEiaF6iXcC8HMSmOo.k/pxiPa.Mye4MDhnVFsMKZ632flw2",
//     phone: 7337791953,
//     name: "NNM23CC007 ANVITH C BHAGAVATH",
//   },
//   {
//     email: "nnm22ad005@nmamit.in",
//     password: "98182547ef29",
//     hashedPassword:
//       "$2b$12$XuGhgMU2Ch6i6EV99lWMOu3RaMcRd8XZ.JHQFL61Pbf1z4emfEFBC",
//     phone: 8762663150,
//     name: "NNM22AD005 AMBIKA JAYASHANTHI",
//   },
//   {
//     email: "nnm22ad045@nmamit.in",
//     password: "0a42e16a2c41",
//     hashedPassword:
//       "$2b$12$0GVPIy5xzn9wvVA4GxS0beNOB8AJYjVHPc6BvMBAulXudY0JHl6mq",
//     phone: 7204346406,
//     name: "NNM22AD045 RUCHITHA PRABHU",
//   },
//   {
//     email: "nnm23cb060@nmamit.in",
//     password: "78c77081883d",
//     hashedPassword:
//       "$2b$12$D1621kYNCHLiaB/a/G4GWe6.X4L9l6xi6BalqnLHObGOoNWIbOW5u",
//     phone: 8310737851,
//     name: "NNM23CB060 SUJAL SUNIL BADDE",
//   },
//   {
//     email: "nnm23ec005@nmamit.in",
//     password: "1532abe538fa",
//     hashedPassword:
//       "$2b$12$CgFoqQnp1KRU.a3i6IJnM.Q8qElOtHrgc65wmZ1/wW1WpjMbF83z.",
//     phone: 9669207983,
//     name: "NNM23EC005 ADARSH SHIVADAS",
//   },
//   {
//     email: "nnm23cb029@nmamit.in",
//     password: "f2fab043e102",
//     hashedPassword:
//       "$2b$12$1jrHi7STD4GPJirCWsGk0.FofyAU36u7qvjAdd4/Shu4Mh.c5ixma",
//     phone: 7676278776,
//     name: "NNM23CB029 MUBASHAR HANIF KATTANGERI",
//   },
//   {
//     email: "nu23k32@nmamit.in",
//     password: "80a816c16a92",
//     hashedPassword:
//       "$2b$12$g6EkHjNsPKrUVPn/gybKreGCwT6UPdq0Rk9PkPjoOmYJd4FY1fH.K",
//     phone: 8792128973,
//     name: "NU23K32 NIHARIKA",
//   },
//   {
//     email: "nnm23is151@nmamit.in",
//     password: "98815a509365",
//     hashedPassword:
//       "$2b$12$RPE4mmz9eRyJ7vPV6u0MyOmasm0C5cHrL6Wd2XFEVE8HuIO5dTYZm",
//     phone: 7619340723,
//     name: "NNM23IS151 RONITH J SALIAN",
//   },
//   {
//     email: "nnm23is191@nmamit.in",
//     password: "630a9010232a",
//     hashedPassword:
//       "$2b$12$tZdNr2DbbL1/kzxAelFfL.QGmKwWoA/7xd9UVsGnsYlraRzNz/.cG",
//     phone: 9845581497,
//     name: "NNM23IS191 SWAROOP SATHISH Y",
//   },
//   {
//     email: "nnm23ri010@nmamit.in",
//     password: "58e33c4ee577",
//     hashedPassword:
//       "$2b$12$fBPXwE39RdNHmnaILDv8tuwLg/e2vIdnCsTVRW/dFDQaF7d6OrVxm",
//     phone: 8792014806,
//     name: "NNM23RI010 ASHIRVAD A POOJARY",
//   },
//   {
//     email: "nnm23vl002@nmamit.in",
//     password: "18cd7b100360",
//     hashedPassword:
//       "$2b$12$9R.q.06taGInQgwBYWx2xOLB2jo2WE7WOOakMlmpeN6//NTdMB3Ga",
//     phone: 7975017612,
//     name: "ABHIJNA LAXMI",
//   },
//   {
//     email: "nnm23am060@nmamit.in",
//     password: "c9823b19c0cf",
//     hashedPassword:
//       "$2b$12$Qx0q5SuM05vKs6xPeK2dbuf4E77ZIrTWMH6bLTZ0wuGbEY71apZ/K",
//     phone: 9632554065,
//     name: "SHARAN RAI K",
//   },
//   {
//     email: "nnm23cb012@nmamit.in",
//     password: "903f234aa0ca",
//     hashedPassword:
//       "$2b$12$9TJItN2Yi3LgEhOAIa93n.45YyAN4FkVxeDgDaqtCVf2W4eLC./SS",
//     phone: 7204939768,
//     name: "NNM23CB012 AYAN AHMED IRFAN",
//   },
//   {
//     email: "nnm23cs151@nmamit.in",
//     password: "cc1f03e558f4",
//     hashedPassword:
//       "$2b$12$M35uZYJByFlx9/hraT/k8O6MWpUlPlc5OBcOFA6jss1XAntN9/OMi",
//     phone: 6364196883,
//     name: "RELISHA SANIA MACHADO",
//   },
//   {
//     email: "nnm22cs178@nmamit.in",
//     password: "0525dd64fda9",
//     hashedPassword:
//       "$2b$12$W3m3Wxd5qqYW5OZLeglPJefm0vqgDjA54i91dfViUhCMbU3C8KnGO",
//     phone: 9945010075,
//     name: "NNM22CS178 SPOORTHI S KOTIAN",
//   },
//   {
//     email: "nnm23cb042@nmamit.in",
//     password: "25ab3565665c",
//     hashedPassword:
//       "$2b$12$LYDyF.K.chppdufNmU4U1eoChxSzi5XaGeCrEvWbrqscHf8bGTLTq",
//     phone: 7676928153,
//     name: "NNM23CB042 PRATHEEKSHA S SHETTY",
//   },
//   {
//     email: "nnm23cb027@nmamit.in",
//     password: "4be50c4249c8",
//     hashedPassword:
//       "$2b$12$mC46l5LXz/AnXN.vWvDoeuZ8CziLtHWnV4y6VE22S24fI6a0LaxKa",
//     phone: 8088872621,
//     name: "NNM23CB027 MANYA",
//   },
//   {
//     email: "nnm23cs029@nmamit.in",
//     password: "7721897bfe87",
//     hashedPassword:
//       "$2b$12$To6zAp7nn0fS9y1Ug.iSb.Fx61vo8HWkOXb8PtmaxuaAzQo5Do7kK",
//     phone: 8762550967,
//     name: "NNM23CS029 ANKITA KAMATH K",
//   },
//   {
//     email: "nnm22cs198@nmamit.in",
//     password: "359b3e90fbc3",
//     hashedPassword:
//       "$2b$12$iMwRnXw39Lk0o7s4za9KMuT3y89H/wQlLh.049IGawygxQf9nyYoy",
//     phone: 9738162836,
//     name: "NNM22CS198 VARSHA B HAMMAGI",
//   },
//   {
//     email: "nnm23cs036@nmamit.in",
//     password: "471443eadba2",
//     hashedPassword:
//       "$2b$12$.Dnpg4SqSR9ifzFLAnlUzeONMFk5TDRV91P/BVtPxlD20QM5nMJee",
//     phone: 7411847318,
//     name: "NNM23CS036 ARAVIND ANISH BHAT",
//   },
//   {
//     email: "nnm22is185@nmamit.in",
//     password: "722578433d2a",
//     hashedPassword:
//       "$2b$12$rqifs3tSOYO0ZWCxvvoXi.8o5XgygAy2pgGyOnuo4w7KDDwpBQZHO",
//     phone: 8867872230,
//     name: "NNM22IS185 TARANI S KULKARNI",
//   },
//   {
//     email: "nnm22cs182@nmamit.in",
//     password: "b082bf5b9b18",
//     hashedPassword:
//       "$2b$12$/tXdZSWr4EgA7pFHwN6qdOvOXytS1aEMuW/L6FiWzTMazTAdpyFjW",
//     phone: 8317387136,
//     name: "NNM22CS182 SUJAN J AMIN",
//   },
//   {
//     email: "nnm23cs106@nmamit.in",
//     password: "5ec6ddaa49ea",
//     hashedPassword:
//       "$2b$12$NKl9mnga2dxkJmi9eYb1QuZJvUYY667zkRBbajJQ2h0h6PCENvTk2",
//     phone: 9113251422,
//     name: "NNM23CS106 MANASVI HEGDE",
//   },
//   {
//     email: "nnm23cb069@nmamit.in",
//     password: "526e0ab3293e",
//     hashedPassword:
//       "$2b$12$BnF2R4NEhyhoxsYg56X/0esv7aW.4urWHEw6w.5knLM7gMUy44JHq",
//     phone: 9108996688,
//     name: "YASHRAJ",
//   },
//   {
//     email: "nnm23ec016@nmamit.in",
//     password: "ddd35135aa70",
//     hashedPassword:
//       "$2b$12$.ZNJoS6PIo84Zyh14oOHLu7e0Q4FOyTAdCti0x2lCol42nYEXm79e",
//     phone: 7899480833,
//     name: "NNM23EC016 AKSHAY BALLAL",
//   },
//   {
//     email: "nnm23cs284@nmamit.in",
//     password: "ad92212c3b1f",
//     hashedPassword:
//       "$2b$12$4w5fezWjW/h5aQz95gZz2.rID9BgO/p33YxvSiu1j9RzT50uaMX66",
//     phone: 6360225523,
//     name: "NNM23CS284 SANGEETHA J",
//   },
//   {
//     email: "nnm23ad061@nmamit.in",
//     password: "f3ef50534eb8",
//     hashedPassword:
//       "$2b$12$LUpBuTC7btwjeU.mrmNBOedi34MM.E.rFf2Qi9KzGLHdR48ywkeOK",
//     phone: 8431295640,
//     name: "NNM23AD061 SOWKUR PRAVEEN N BHAT",
//   },
//   {
//     email: "nnm23cs025@nmamit.in",
//     password: "2647f3aa9f8d",
//     hashedPassword:
//       "$2b$12$z4nj17yQFnBqADxH1CIysex.8ZWsRqvRKcMjKWVmz2q/96dZR3f3y",
//     phone: 8147133575,
//     name: "NNM23CS025 ANANYA",
//   },
//   {
//     email: "nnm23cs049@nmamit.in",
//     password: "9e0d635f9714",
//     hashedPassword:
//       "$2b$12$WmmgMJz3QDbxiVun.PeZFOpFOc1i0UBQDXwNMqjTBvVQ4MIjQfkwy",
//     phone: 8660283445,
//     name: "NNM23CS049 CHARISHMA SHETTY",
//   },
//   {
//     email: "nnm23cs227@nmamit.in",
//     password: "5d5b1c8a5686",
//     hashedPassword:
//       "$2b$12$ICu4k9MClBm2deGbNQfG..oGd.d4eb0URAxjqfvxeJHqRjNpaIiLm",
//     phone: 8951964505,
//     name: "NNM23CS227 VASUDHA AMMUNJE NAYAK",
//   },
//   {
//     email: "nnm23cs050@nmamit.in",
//     password: "3343154e79fc",
//     hashedPassword:
//       "$2b$12$rzlrFNm7z7MqNq4DUJEocO9VSfOn5PcpQ3OAwLJPsUiXUwfcARk/G",
//     phone: 7338514873,
//     name: "NNM23CS050 CHERISH KEVIN MASCARENHAS",
//   },
//   {
//     email: "nnm23ec012@nmamit.in",
//     password: "148a8254340d",
//     hashedPassword:
//       "$2b$12$h.H27wsDIceukX0w/Hp0a.1y8VW.oA2Nth7Ud4YBoBLtnWKkVyluO",
//     phone: 8792511409,
//     name: "NNM23EC012 ADITI H NAYAK",
//   },
//   {
//     email: "nnm22ri065@nmamit.in",
//     password: "5201fe39a63e",
//     hashedPassword:
//       "$2b$12$Ya38wmTmGX5yZKLuwSxbEe2iiM1x8u5QkqEtVMBsIz91Yr.iTGdAC",
//     phone: 9632683105,
//     name: "NNM22RI065 SUSHMITHA S SHETTY",
//   },
//   {
//     email: "nnm23ri023@nmamit.in",
//     password: "a8c07bf36f32",
//     hashedPassword:
//       "$2b$12$j/o876hmbsPwT0OETg1Y4OVp8AutphBXG2mKzArj.rDc9jgmEcQuS",
//     phone: 7510699136,
//     name: "NNM23RI023 GHANASHYAM N V",
//   },
//   {
//     email: "nnm23cs233@nmamit.in",
//     password: "859fcec330c3",
//     hashedPassword:
//       "$2b$12$DFDXU.UmmqbOqaloLSyoseKe9eottL7JsmZLSE.VjfcPr6QEjqcwG",
//     phone: 9544792603,
//     name: "NNM23CS233 VISHNU K",
//   },
//   {
//     email: "nnm23cs272@nmamit.in",
//     password: "4fb76ef03163",
//     hashedPassword:
//       "$2b$12$mJB8ybYo3DJxtShmqwL5hOjj4b3ePRBEE4iz94V1jID3zB/tRubmK",
//     phone: 9606853527,
//     name: "NNM23CS272 PRATHAM B SHETTY",
//   },
//   {
//     email: "nnm23vl038@nmamit.in",
//     password: "623b73e8f5aa",
//     hashedPassword:
//       "$2b$12$EHbRNafxlNZ/UM3l2PYJUOAHBZ7b9M53uL8noQCJop8uvlAjtB1mO",
//     phone: 9400405940,
//     name: "NNM23VL038 NAVANEETH C P",
//   },
//   {
//     email: "nnm23am022@nmamit.in",
//     password: "c8ce34c97f0b",
//     hashedPassword:
//       "$2b$12$q0ZINTn3Bcdo6gmjlTXtq.1iSbh7GxTt7SvzbFf0HDdzS1HSkVnSK",
//     phone: 7989513675,
//     name: "NNM23AM022 GUNA TEJA SARVAN PATNAIK",
//   },
//   {
//     email: "nnm23cs257@nmamit.in",
//     password: "06964bc5e404",
//     hashedPassword:
//       "$2b$12$NbZfOMT9R2BhkQ9n4wpy6.3HExDBVvtrgXbSawOueOjH3EHbhLI1O",
//     phone: 6364263066,
//     name: "NNM23CS257 KRITHIKA RAVIRAJ",
//   },
//   {
//     email: "nnm23is128@nmamit.in",
//     password: "4b4318af857b",
//     hashedPassword:
//       "$2b$12$VWOep7tsFx3qCg0JNqOy8uCPFnRQflv54NRrqQ45AC7jW8.y0Ex1G",
//     phone: 7760015744,
//     name: "NNM23IS128 PRAJWAL B T",
//   },
//   {
//     email: "nnm22cs119@nmamit.in",
//     password: "1d30a0fe1e7b",
//     hashedPassword:
//       "$2b$12$urmM4paoU4Mrywr5sHv0ieYumJukni8F.cFd3Zpx/itZqn5dNSHLS",
//     phone: 7019493723,
//     name: "NNM22CS119 P SHIVARAM AITHAL",
//   },
//   {
//     email: "nnm23cs157@nmamit.in",
//     password: "1f43bb837ea8",
//     hashedPassword:
//       "$2b$12$9ZJWLaMMqDaurWU1ApGE4uctfLIpf/QWf/1QRmcJ7CqtfRKU.Lx.S",
//     phone: 9019880479,
//     name: "NNM23CS157 RONAK S SHETTY",
//   },
//   {
//     email: "nnm23cs270@nmamit.in",
//     password: "e1aae526c269",
//     hashedPassword:
//       "$2b$12$7x3QJD9abzOCJ87jbdIHhe2XmSEe9ndmnK.ceIgd2XdyUyBDIATrG",
//     phone: 9611556210,
//     name: "NNM23CS270 PRAJWAL P SHETTY",
//   },
//   {
//     email: "nnm23ec160@nmamit.in",
//     password: "8a248e52d801",
//     hashedPassword:
//       "$2b$12$PyyvYDLD.eF3.IArhbOqDuPVDgXOoeHWI.UF8oXg4ci8.KtFyIVp.",
//     phone: 7019342598,
//     name: "NNM23EC160 SHARANYA",
//   },
//   {
//     email: "nnm23cs159@nmamit.in",
//     password: "cfab7caadd6b",
//     hashedPassword:
//       "$2b$12$dgljlBGb7tuXMM3gWtZ9PuJ10PU/FnQztZZt6ygvdDGIvmXhzvf6i",
//     phone: 8296692520,
//     name: "NNM23CS159 ROVITA PRIYA MONIS",
//   },
//   {
//     email: "nnm23cs199@nmamit.in",
//     password: "b5486ae18a82",
//     hashedPassword:
//       "$2b$12$gpMasZFIdsRSq0SH9QZN0.VzZ3vJZaJFExrPHmJAQZoiQ7e.bWTmi",
//     phone: 7411276721,
//     name: "SHUBHAM VAIKUNT RAIKAR",
//   },
//   {
//     email: "nnm23cb006@nmamit.in",
//     password: "612a05bd8bdc",
//     hashedPassword:
//       "$2b$12$6W/V2XsmnYhfOaBWPwZZCe56aFyaux6ctS7vNVqfaESr.Woo6swuG",
//     phone: 7483685766,
//     name: "NNM23CB006 AKANKSH J K",
//   },
//   {
//     email: "nnm23cs197@nmamit.in",
//     password: "null",
//     hashedPassword:
//       "$2b$12$8h6q0g/ziS1crA3jZlEN5esFbyyhQbcOs05JpucT7N4tsmhY1t39y",
//     phone: 6362869362,
//     name: "NNM23CS197 SHREYAS SANJEEV GUNAGI",
//   },
//   {
//     email: "nnm23cs118@nmamit.in",
//     password: "8cd99273e12c",
//     hashedPassword:
//       "$2b$12$Ihu4QPxugAJ.JlHX.6AtG.Fb2VVD2vwGLh81vNKtPsaHmHJn34dBK",
//     phone: 8197659305,
//     name: "NNM23CS118 NEHA SHETTY",
//   },
//   {
//     email: "nnm23cs143@nmamit.in",
//     password: "570a928d3900",
//     hashedPassword:
//       "$2b$12$JXk.4KW1it83koo6y8xZoONmjyiY7xhUZwRPoOXVid3AOnkM0KmnW",
//     phone: 9663498827,
//     name: "NNM23CS143 RACHANA NARAYAN",
//   },
//   {
//     email: "nnm23cs124@nmamit.in",
//     password: "1d0f08062bb9",
//     hashedPassword:
//       "$2b$12$qzWLWGJ9Bb7KLRVM6Ib4yu8139HF4mlq99fj.a3EAsp41uX3NVPjG",
//     phone: 7338652017,
//     name: "NNM23CS124 PARIPOORNA B",
//   },
//   {
//     email: "nnm23cs149@nmamit.in",
//     password: "1e7bc3ead5b0",
//     hashedPassword:
//       "$2b$12$H5I7WjY2ZfPFwJWoz3V2xOVnpAkbGamd1TkJ85PTSpfuYEdGnNH92",
//     phone: 6364226558,
//     name: "NNM23CS149 REEGAN SUJAL PINTO",
//   },
//   {
//     email: "nnm22cs075@nmamit.in",
//     password: "ad7545c531e6",
//     hashedPassword:
//       "$2b$12$4Z/6ryejFKthT2VndCa5.unOPwEwU7JK5IQXxv1nwdJtFtLYOwmkO",
//     phone: 7676686428,
//     name: "NNM22CS075 HARSHITH DURGADAS SHETTIGAR",
//   },
//   {
//     email: "nnm23ri014@nmamit.in",
//     password: "868324da1d24",
//     hashedPassword:
//       "$2b$12$fUAOOLVGpn2zX7RFwgTirOpbKMx3U5jyTWPun6F9naxbtiryRo29G",
//     phone: 9392984634,
//     name: "NNM23RI014 BOBBA ANAND",
//   },
//   {
//     email: "nnm23is112@nmamit.in",
//     password: "e6f04d3f43d1",
//     hashedPassword:
//       "$2b$12$u7Dg/oeVAAjVPX/nnK1i0Oe3nCo64EyXPdt8tD/Iv.CQAqkEIOYgW",
//     phone: 8971005536,
//     name: "NNM23IS112 NISCHAL SHETTY",
//   },
//   {
//     email: "nnm23cs292@nmamit.in",
//     password: "22a80531cfc2",
//     hashedPassword:
//       "$2b$12$vg5yx5Mdul7CmDgFth.KluRaIbhSvDPCtthRqYcqP7TIwZ8xv9EgC",
//     phone: 8197820186,
//     name: "NNM23CS292 VISHWESH A B",
//   },
//   {
//     email: "nnm22cs124@nmamit.in",
//     password: "d32239c127ff",
//     hashedPassword:
//       "$2b$12$rwGHFh7H6EG9Tu/wliKFD.Cq2UO79zVjHDNxtBMyHLHp30ysxaoT6",
//     phone: 8660849121,
//     name: "NNM22CS124 PRADYUTHI K S",
//   },
//   {
//     email: "nnm22cs133@nmamit.in",
//     password: "192d06236bab",
//     hashedPassword:
//       "$2b$12$NPsXYIsNQfJNIlXXb8GJC.uASdkhEUbqz9All724CwKx1iv.N1z9S",
//     phone: 8861474678,
//     name: "xyz",
//   },
//   {
//     email: "nnm23cb063@nmamit.in",
//     password: "d398d4998d8f",
//     hashedPassword:
//       "$2b$12$/gof6BkBhY0J2mc//ifzw.Cv4xWmRF0qaplacHGHKNbfIbsISeebK",
//     phone: 9731920228,
//     name: "SUJNAN D DEVADIGA",
//   },
//   {
//     email: "nu23e33@nmamit.in",
//     password: "96bee9b17f51",
//     hashedPassword:
//       "$2b$12$C/gZJmcxY7w/qZMbOU.QQOffBWNicIymt7QHjbvxGeo/xmfZ59cMW",
//     phone: 9986360909,
//     name: "NU23E33 CHAITHANYA N KAMATH",
//   },
//   {
//     email: "nnm22cs045@nmamit.in",
//     password: "1bdd6d186178",
//     hashedPassword:
//       "$2b$12$gPhNDPxKA9elni6hej9q.e2RiWh8UIe4rrR.ApKbqHeGGne5p65qe",
//     phone: 8310876451,
//     name: "NNM22CS045 CHARAN G",
//   },
//   {
//     email: "nnm22cs208@nmamit.in",
//     password: "acdcabf964d2",
//     hashedPassword:
//       "$2b$12$XOQs4hxneR6lhxDtzaHa/.4mT6UX1Sr.B/mxIRJAy8pFh0kye8X1G",
//     phone: 9980800749,
//     name: "NNM22CS208 VINAYAK KAMATH B",
//   },
//   {
//     email: "nnm22cs157@nmamit.in",
//     password: "832c58c99578",
//     hashedPassword:
//       "$2b$12$vBtLFHS9oAefyuE.Uk/DGe23DhtRlPG.OPgOjij2921b5VL1UwP0m",
//     phone: 9743459480,
//     name: "NNM22CS157 SARTHAK S SHETTY",
//   },
//   {
//     email: "nnm22cs084@nmamit.in",
//     password: "e8293647f12d",
//     hashedPassword:
//       "$2b$12$AeB0eB/mKdmdGpa4nfGR.enNMsWYrIkCsz3QJiDCIHFzDg790qmsO",
//     phone: 7892353712,
//     name: "NNM22CS084 K KANNIKA N RAO",
//   },
//   {
//     email: "nnm22ad002@nmamit.in",
//     password: "cef84a06523b",
//     hashedPassword:
//       "$2b$12$lgCm47Z.Nl.vzDZMoCkgH.TNzsN1pzGMsQf/aUVPS4ztP0vJ/CCQu",
//     phone: 6238167700,
//     name: "NNM22AD002 Abhijna N",
//   },
//   {
//     email: "nnm23cs171@nmamit.in",
//     password: "0630d1a2b9d4",
//     hashedPassword:
//       "$2b$12$rWRcq7rdc9Af15Be1W.DMesxnmr3EFzKoQSps5z2upuCkBQTdX3t.",
//     phone: 9482497035,
//     name: "NNM23CS171 SAURABH",
//   },
//   {
//     email: "nnm23is186@nmamit.in",
//     password: "8b8ba732f802",
//     hashedPassword:
//       "$2b$12$yr0kiuR6.593YJpourQrJemvOk6yvrY3kWlAVtvuEuMOZr1YacoD6",
//     phone: 8105302470,
//     name: "NNM23IS186 SRUJAN M PADMASHALI",
//   },
//   {
//     email: "nnm23ad500@nmamit.in",
//     password: "563861401a8f",
//     hashedPassword:
//       "$2b$12$jRb.2XfJPmisGiJGm5LKi.zuGhZcod7QJELWPGRcgRaaULoknT1.m",
//     phone: 8693089489,
//     name: "NNM23AD500 MOOLYA JYOTHII RAMA",
//   },
//   {
//     email: "nnm23cs145@nmamit.in",
//     password: "577bbce9e20a",
//     hashedPassword:
//       "$2b$12$hMA0EiXckCY6PsPLMe5eQOYpS0L6M.S8OMtn.aOeSaxi.k2d/LxhO",
//     phone: 8310816291,
//     name: "RAJASHREE SHETTY",
//   },
//   {
//     email: "nnm23cb068@nmamit.in",
//     password: "e8f468fd018c",
//     hashedPassword:
//       "$2b$12$6k9VI9NL5vGKTDY6fCDqy.Ri7cUyuwssBNduiCTkO5PtXQiQZvqlO",
//     phone: 7349016559,
//     name: "NNM23CB068 VRUDDITH R SHETTY",
//   },
//   {
//     email: "nnm22is076@nmamit.in",
//     password: "53fcaa0e7ef3",
//     hashedPassword:
//       "$2b$12$ZCrQuG1xb8osvMNZ5ZzYoeC1bF4kxWaVc2aCdJxf2UbPc1RLWbcLG",
//     phone: 9535197182,
//     name: "NNM22IS076 KSHITIJ HEGDE",
//   },
//   {
//     email: "nnm22ad032@nmamit.in",
//     password: "381dae9160e2",
//     hashedPassword:
//       "$2b$12$Il4z/pKfFMNPsGoYxvqVvOFCTTW7AttRFg3KhDVQXyT/U8G.ZiWaK",
//     phone: 6361940974,
//     name: "NNM22AD032 NAGENDRA S RAO",
//   },
//   {
//     email: "nnm23ec162@nmamit.in",
//     password: "0a1c28388b80",
//     hashedPassword:
//       "$2b$12$jbM8.wR1BF6brvr8RO5xhOJwAwuGoExhz98u7c6yIodz9vOzuPXLy",
//     phone: 9448703219,
//     name: "NNM23EC162 SHAYAN BARETTO",
//   },
//   {
//     email: "nnm23ec042@nmamit.in",
//     password: "b04b8aa2476f",
//     hashedPassword:
//       "$2b$12$/RxholsBaTvMo3xf3ytXn.10Hg6HTzDnT/EFhiy18.IvSiMx5AGle",
//     phone: 8197985187,
//     name: "NNM23EC042 CHALANA A SHETTY",
//   },
//   {
//     email: "nnm23ec148@nmamit.in",
//     password: "4c7202754b2c",
//     hashedPassword:
//       "$2b$12$IacFWU1pR1NHjRcN9MPpKeu5VhizvQ3c6KzC4W1HFJQ3e4kMbDEKS",
//     phone: 9036788228,
//     name: "NNM23EC148 SAKSHA",
//   },
//   {
//     email: "nnm23cs214@nmamit.in",
//     password: "16f5ee83288a",
//     hashedPassword:
//       "$2b$12$XGljRDHjYTioPfQpgqjvXuLE1h6V7PUGsIElnViuUIZkzLfPLbhkG",
//     phone: 8217688673,
//     name: "NNM23CS214 TANISHA K",
//   },
//   {
//     email: "nnm23am027@nmamit.in",
//     password: "48c29b0b40f8",
//     hashedPassword:
//       "$2b$12$g8Hkib2mG94.6MMuClVliO0Vog4CMTaLCRQVTOaWmNbZajJtZeuq.",
//     phone: 9353910119,
//     name: "NNM23AM027 M TANVI PAI",
//   },
//   {
//     email: "nnm23am019@nmamit.in",
//     password: "954a8c97dbaa",
//     hashedPassword:
//       "$2b$12$I4ghx2hdFOI01QTeFBfUuuBmry2OfQOLpvvWrAZRqlRHU.6afwHvq",
//     phone: 8861717547,
//     name: "NNM23AM019 DEANNA JENEVIEVE MABEN",
//   },
//   {
//     email: "nnm22cc029@nmamit.in",
//     password: "c463349a6dad",
//     hashedPassword:
//       "$2b$12$plrWjObsaHtXwKLmGQx6kuhuxwZY1GX03Haw9HZJHHs0GbtkAJbnu",
//     phone: 9945809021,
//     name: "NNM22CC029 KHUSHI SHETTY",
//   },
//   {
//     email: "nnm23is033@nmamit.in",
//     password: "2b0a4e503366",
//     hashedPassword:
//       "$2b$12$vK0X.CvnD41q0/WZuOJP.e4QTcr81mfAiKJ22ltkz8p1rs.9WJI.i",
//     phone: 9353917782,
//     name: "NNM23IS033 BHARATH D NAYAK",
//   },
//   {
//     email: "nnm23cb047@nmamit.in",
//     password: "4556781dbcb1",
//     hashedPassword:
//       "$2b$12$6zm3mZ.AbUusBrwvK5HoIOMgkFb9eP8TnENyXeyHjz77ehEhpu9ma",
//     phone: 7899056907,
//     name: "NNM23CB047 SANDEEP PAI KULYADI",
//   },
//   {
//     email: "nnm23am005@nmamit.in",
//     password: "5fd91664b0b6",
//     hashedPassword:
//       "$2b$12$usS2naAXCiJZ7hWo78PAV.3gKPBmWd5JQuejVNh2.PNjb9V1YlvNe",
//     phone: 9741468532,
//     name: "NNM23AM005 AKSHITH J SHETTY",
//   },
//   {
//     email: "nnm23vl034@nmamit.in",
//     password: "53fcdda0cb2d",
//     hashedPassword:
//       "$2b$12$wWDWgGgqcfQxpXRoS/Pj/eDb1LqmspAujptY/MfDbWvp3qgBzkIIC",
//     phone: 9448895854,
//     name: "NNM23VL034 KRISHNA M NAIR",
//   },
//   {
//     email: "nnm23cs139@nmamit.in",
//     password: "19cd8b46d6bd",
//     hashedPassword:
//       "$2b$12$KxKmqAo.HJQe6Xn5DIP.vOUV/yBwcapLEo6XCGi.XhKf54glBDIce",
//     phone: 7892061670,
//     name: "NNM23CS139 PRATUL PRASHANTH KOTIAN",
//   },
//   {
//     email: "nnm23cb056@nmamit.in",
//     password: "4f71104c239b",
//     hashedPassword:
//       "$2b$12$kg2wjD1AZtFHO5cCVxNELeMg8aOKNp0Jyb4MvPbjMihaHTY2JQHM.",
//     phone: 9632317541,
//     name: "NNM23CB056 SHRIRAKSHA JAGADISH NAIK",
//   },
//   {
//     email: "nnm23cs517@nmamit.in",
//     password: "02bc4e90ca8d",
//     hashedPassword:
//       "$2b$12$srqSTRdAJVCXS9nqYvOPlejnc6RbiiBYYWEI6n0xewgVWmGV0k4SS",
//     phone: 9108106139,
//     name: "YATHISH",
//   },
//   {
//     email: "nnm23cc037@nmamit.in",
//     password: "d5c92f4b952b",
//     hashedPassword:
//       "$2b$12$94x7ZBJWsfXNA1AvyY/CcOhV.67dJvOLZ/CFJp.1M.wQvC2X.gESm",
//     phone: 8792154300,
//     name: "NNM23CC037 POOJA",
//   },
//   {
//     email: "nnm23is069@nmamit.in",
//     password: "67dc9126f9cc",
//     hashedPassword:
//       "$2b$12$DfS7gbTLYxp85HIhEhrz0.DFvHTB42r1FWiA3XW.qacJ2g.i2fdli",
//     phone: 9901698009,
//     name: "NNM23IS069 GAUTHAMI",
//   },
//   {
//     email: "nnm23cs064@nmamit.in",
//     password: "bfb1687d1141",
//     hashedPassword:
//       "$2b$12$adUPZcLXuR3X5WB45j2U5.Cx/YTAlLWdpDxzWsJKp.6hxhupg83cO",
//     phone: 9481962877,
//     name: "NNM23CS064 DISHA B KAMATH",
//   },
//   {
//     email: "nnm23cs200@nmamit.in",
//     password: "728dc0049e39",
//     hashedPassword:
//       "$2b$12$UB.Acxie8PnqHvE2cQQLGOUDwC3yXSWYf/GB7DasQ/A6SA542RhkS",
//     phone: 9449270999,
//     name: "NNM23CS200 SHUBHANGI G VAIDYA",
//   },
//   {
//     email: "nnm23cb054@nmamit.in",
//     password: "8d4ed169d063",
//     hashedPassword:
//       "$2b$12$Dbnl8P17DWrpRnvKTy7AEu6vWwBsFa/nmQ4SVN/UzaKey2iDnDyDC",
//     phone: 9663475838,
//     name: "NNM23CB054 SHREERAKSHA M",
//   },
//   {
//     email: "nnm23ad004@nmamit.in",
//     password: "9e00c655342d",
//     hashedPassword:
//       "$2b$12$0xnQr2BZMIogO9zkCAIN4OGXteLOT9O6OJiXLl02y0ouc4YNiGWBG",
//     phone: 6362406227,
//     name: "ADITHYA S NAYAK",
//   },
//   {
//     email: "nnm23cs215@nmamit.in",
//     password: "bf1d72653948",
//     hashedPassword:
//       "$2b$12$Z7dzkA7CKFRxq2mN2btgK.jKHbY/j1wJVlD19K1bEsA1ce4lZBtc6",
//     phone: 8073353042,
//     name: "NNM23CS215 TANISHA U PRAKASH",
//   },
//   {
//     email: "nnm23cs150@nmamit.in",
//     password: "67486a72e478",
//     hashedPassword:
//       "$2b$12$mNfL/Y5igBO8xje3UDEqcOFw6PJs/s0GUBiEPV0tdVpDMGXYfya5K",
//     phone: 6361641522,
//     name: "NNM23CS150 REEGAN SUMAN KARKADA",
//   },
//   {
//     email: "nnm23bt011@nmamit.in",
//     password: "e5bf43cae330",
//     hashedPassword:
//       "$2b$12$YI6VQXUxTeJu4DHLEjI75eN0zWXk0ZHOMyq3RuaG.cvwko8At9EK.",
//     phone: 8762125712,
//     name: "NNM23BT011 DHRITHI SHETTY B",
//   },
//   {
//     email: "nnm23cs191@nmamit.in",
//     password: "e3ebeef4f340",
//     hashedPassword:
//       "$2b$12$Ggyk8yHzPZzbHcM4rZR/UOhhg4jKPm7bvE8rYFX8rf7Koh/mA5N0.",
//     phone: 9141181775,
//     name: "NNM23CS191 SHREYA PRABHU",
//   },
//   {
//     email: "nnm23cs037@nmamit.in",
//     password: "f8e6f89a3fe0",
//     hashedPassword:
//       "$2b$12$LXhmU9m.Y9Hgm6EOrB.7EuWVRemSPJJp2YjLV0nIliYHQsgl6Rh72",
//     phone: 7090884155,
//     name: "NNM23CS037 ARLIN RIYA DSOUZA",
//   },
//   {
//     email: "nu23a42@nmamit.in",
//     password: "1087c77064fa",
//     hashedPassword:
//       "$2b$12$OVgsclYSveu7A8Tksbc8uOIG2vyVT/AsbpLtuXbxl/Z1OITY7EZ4u",
//     phone: 8150947796,
//     name: "ASHTON PRINCE MATHIAS",
//   },
//   {
//     email: "nnm23is086@nmamit.in",
//     password: "d47ebbf1e872",
//     hashedPassword:
//       "$2b$12$OhwL8k0yH.uB3JG5oi1b6.Qz9tam4nMCqABpGSNUB4ysosj8oCa0C",
//     phone: 9632211800,
//     name: "NNM23IS086 KARTHIK",
//   },
//   {
//     email: "nnm23am009@nmamit.in",
//     password: "55f1e068e683",
//     hashedPassword:
//       "$2b$12$LQxuiO4MvSf/CeH3GZFDQOMIInf3praJe1p93FwEaB.YMYl/Bntte",
//     phone: 9901394465,
//     name: "NNM23AM009 ANUSH C RAO",
//   },
//   {
//     email: "nnm23is077@nmamit.in",
//     password: "370a4ba6e4fe",
//     hashedPassword:
//       "$2b$12$yXYujPpWGEVV9.Ajd21RIe2GzoZtOiRG46k.WxNNr5gcCVpYcx51W",
//     phone: 6360840782,
//     name: "NNM23IS077 IBBANI H G",
//   },
//   {
//     email: "nnm23ec106@nmamit.in",
//     password: "bf03eca2fe57",
//     hashedPassword:
//       "$2b$12$XGw3auboHq2AV/W3zNMIhODkjOtCB04IgUl8zGXrVnOkxu73dc6GC",
//     phone: 8050630054,
//     name: "NNM23EC106 NIDHI VASUDEVA SHETTY",
//   },
//   {
//     email: "nnm23is116@nmamit.in",
//     password: "99aa0d26626b",
//     hashedPassword:
//       "$2b$12$uQ3XWu8vJq80aMe63jx89uDla/Ec2FBeoMr.E0MtEN6DpDrhK67xS",
//     phone: 7483982039,
//     name: "NNM23IS116 NITHIN M",
//   },
//   {
//     email: "nnm23is157@nmamit.in",
//     password: "8708e938ec85",
//     hashedPassword:
//       "$2b$12$Z6aYZyZLMGtJEU2zq0q5ZOScv9Jww7TmPTqtdp.b60fWCy3JtLaBW",
//     phone: 9448627562,
//     name: "NNM23IS157 SAMHITA ADIGA",
//   },
//   {
//     email: "nnm23ec158@nmamit.in",
//     password: "881776b5416b",
//     hashedPassword:
//       "$2b$12$23RqRS3RzdawWsJyFNqkduRYZ2VbvIt0sXwHFeq.NL8L8RNnwYaQG",
//     phone: 8296927752,
//     name: "NNM23EC158 SHALINI BHAT",
//   },
//   {
//     email: "nnm23cs131@nmamit.in",
//     password: "7376c7a8a3f6",
//     hashedPassword:
//       "$2b$12$QXYjUxiZNFg8Tc/xLAoOiuJ8GI4WInR1zNqlGMqqGUz/bsx7AjT6O",
//     phone: 6361209625,
//     name: "NNM23CS131 PRAJNA RAO",
//   },
//   {
//     email: "nnm23bt032@nmamit.in",
//     password: "4daed4501fac",
//     hashedPassword:
//       "$2b$12$BY3hXjQXbQYjKLdBXF0a5Ovo8YVqs2OnrL1ArNR0cc4TrGH8u0m.i",
//     phone: 7624930747,
//     name: "NNM23BT032 MEGHA",
//   },
//   {
//     email: "nnm23am004@nmamit.in",
//     password: "3dbef6bdb0d7",
//     hashedPassword:
//       "$2b$12$Yc0sJ7edIY2TCQ2AtYq5D.qdpQIJ5iHajrRPg10pKKf4xvAwuDE2i",
//     phone: 9606326718,
//     name: "NNM23AM004 AKSHAY S AITHAL",
//   },
//   {
//     email: "nnm23cc021@nmamit.in",
//     password: "f224f25e9ebe",
//     hashedPassword:
//       "$2b$12$6KaiDQW83F1DGd7Fpwc6zO26W8l.fzIaOkP2lsJH6wpvtmPdfxrOO",
//     phone: 7619399235,
//     name: "NNM23CC021 KAUSHIK",
//   },
//   {
//     email: "nnm23is149@nmamit.in",
//     password: "32b1d52432d4",
//     hashedPassword:
//       "$2b$12$AE5.tWVhMckuAXKBxF7cS.nKaS/tI02UZd/cWCuQmo6qY3lWTOxty",
//     phone: 8310387438,
//     name: "NNM23IS149 RIYA PAI",
//   },
//   {
//     email: "nnm23ad039@nmamit.in",
//     password: "a41f5eb57528",
//     hashedPassword:
//       "$2b$12$ajLY.se.EYAjGoOTwpanoeBJMiCfiAO7H0EKYT58my6VCdvvSPZQi",
//     phone: 9538424766,
//     name: "NNM23AD039 PRITHVI SHENOY",
//   },
//   {
//     email: "nnm23cs137@nmamit.in",
//     password: "7d5eccf2ed1b",
//     hashedPassword:
//       "$2b$12$h76syqZONb4UwqUIiC4VUOTModKAjTqjYRZajvLs45V5OsmqSrD6G",
//     phone: 8762879970,
//     name: "NNM23CS137 PRATHAM SEETHARAM",
//   },
//   {
//     email: "nnm23cs178@nmamit.in",
//     password: "0e32f4b927d7",
//     hashedPassword:
//       "$2b$12$BVMz2L6JGE0VOO88H63n9OaWX9Ki19j.kAVPFQBEL0W632qbX5Qfe",
//     phone: 7899262964,
//     name: "NNM23CS178 SHARANYA S SURESH",
//   },
//   {
//     email: "nnm23cc018@nmamit.in",
//     password: "bea056f04d6d",
//     hashedPassword:
//       "$2b$12$fLak70fU2hPUyNiWOFVJIuvy8oJG5PozaaNvtBHO1RHwCgejqxXH2",
//     phone: 7483461592,
//     name: "NNM23CC018 HARSHITH S DEVADIGA",
//   },
//   {
//     email: "nnm23is204@nmamit.in",
//     password: "93df8d14384e",
//     hashedPassword:
//       "$2b$12$eeXf.g.sotDKR0W3M5szlOA.4oii8wnGN9.MD49IgQc8Gi467xa9O",
//     phone: 7624927870,
//     name: "NNM23IS204 V MITHUN MALLYA",
//   },
//   {
//     email: "nnm23ec068@nmamit.in",
//     password: "3fdc402f4b34",
//     hashedPassword:
//       "$2b$12$omAhCoeUCAJaLIUF7vLOMelE8uTTV.SAYxlhhMAYlmZ0qxjcgRUkS",
//     phone: 6360358499,
//     name: "NNM23EC068 GOMATHI M R",
//   },
//   {
//     email: "nnm23cs115@nmamit.in",
//     password: "a9d967be2045",
//     hashedPassword:
//       "$2b$12$zuMsnAfvfXRHuH9hlNaqTuqqWDS.9Ei3RAQ2/QGRKnrwe5lcKYpvC",
//     phone: 9380753191,
//     name: "NAKSHATHRA A",
//   },
//   {
//     email: "nnm23cs021@nmamit.in",
//     password: "9d103db9fae1",
//     hashedPassword:
//       "$2b$12$WfSHfyLRZyKp0Nt9ya1O.eK0I/9QOZ1WH7SDwnsbfHEfdq.VCwZl.",
//     phone: 9591819777,
//     name: "NNM23CS021 AMAN MARIAN CUTINHA",
//   },
//   {
//     email: "nnm23cs141@nmamit.in",
//     password: "ec19feb283b7",
//     hashedPassword:
//       "$2b$12$m7EMeebJxsCu3QYQQkP0c.CSBOCv05xwELTllDLplLdoAKhN7SFli",
//     phone: 9074470513,
//     name: "NNM23CS141 PRIYANKA K P",
//   },
//   {
//     email: "nnm23ec080@nmamit.in",
//     password: "8ccbb2adf1f2",
//     hashedPassword:
//       "$2b$12$vctcB3GBHda8ph8p5qC61Ool/7exhJS0AAgA2.Fz2W0hR7CR3BTCO",
//     phone: 9901473397,
//     name: "NNM23EC080 KRATIKA V ULMAN",
//   },
//   {
//     email: "nnm23cb055@nmamit.in",
//     password: "735c51c12231",
//     hashedPassword:
//       "$2b$12$NPRcEgJNAmJtbqNanvL5aOM5S0D2mxiyEyI5wcCjLpr4XS0pdqDXm",
//     phone: 9947964147,
//     name: "SHREYA",
//   },
//   {
//     email: "nnm23is120@nmamit.in",
//     password: "e2d1cb17a8df",
//     hashedPassword:
//       "$2b$12$tbavvqUK5ZzPIaoCSa.qg.B0tmbP3Dcn6iPTa97sv9P1w1anOizxK",
//     phone: 7348817939,
//     name: "NNM23IS120 PANCHAMI V SHETTY",
//   },
//   {
//     email: "nnm23ad045@nmamit.in",
//     password: "35ea45745f1f",
//     hashedPassword:
//       "$2b$12$GJf1q2I5em8NWNJG1cRpf.4lKXQ74bf8QEjgXOiOD1iOobqv4QI/C",
//     phone: 8792425652,
//     name: "NNM23AD045 RISHONA DSOUZA",
//   },
//   {
//     email: "nnm23ad044@nmamit.in",
//     password: "13862cea0fcf",
//     hashedPassword:
//       "$2b$12$3Rl1ClcDilxspRp5QJeKieFOW.fhF00Aj2SdMdQ6u7LaP/CXQ/elC",
//     phone: 8296996728,
//     name: "NNM23AD044 RHIONA DSOUZA",
//   },
//   {
//     email: "nnm23is175@nmamit.in",
//     password: "4ce4cf0230c1",
//     hashedPassword:
//       "$2b$12$9fage7toyyznxU.vOYcXc.o3ILVMHHF7ZC.gGvnH0xaxO./ZAI2T6",
//     phone: 8317401592,
//     name: "NNM23IS175 SHREYAS S",
//   },
//   {
//     email: "nnm23is122@nmamit.in",
//     password: "a0d1d130c133",
//     hashedPassword:
//       "$2b$12$C6orEptwex3O697FSdyvleYHUCiQPFsqALCBqcFAmjYg56Pf1bfUi",
//     phone: 9019967948,
//     name: "NNM23IS122 PARVATHI SANTHOSH",
//   },
//   {
//     email: "nnm23is110@nmamit.in",
//     password: "f8f74d34dfd3",
//     hashedPassword:
//       "$2b$12$CiUxIuwvfXyMwqJkRPEAAuNcJp/Ed.PXhCO6sVt82/7PzYjeozy3O",
//     phone: 7619622124,
//     name: "NNM23IS110 NIKHITHA S KOTIAN",
//   },
//   {
//     email: "nnm23is119@nmamit.in",
//     password: "950dc923d7a9",
//     hashedPassword:
//       "$2b$12$.JDRfJY7O.0SlTupofL7zOIJPUFSE4NbY93iRLaZBr0BMyE.uwbUi",
//     phone: 9483156359,
//     name: "NNM23IS119 PANCHAMI KASHYAP",
//   },
//   {
//     email: "nnm23cs121@nmamit.in",
//     password: "b701342816ab",
//     hashedPassword:
//       "$2b$12$tbWFwC9yDTzkemz.2QMFVekzg/FQtLT6hSUSJCMSEeme7k9gZ8FHi",
//     phone: 7026937106,
//     name: "NNM23CS121 NIKHIL CHANDRA",
//   },
//   {
//     email: "nnm23cs248@nmamit.in",
//     password: "009fd24c124b",
//     hashedPassword:
//       "$2b$12$os5v4/5vX2z2YYkn0qJ8MuJwQ4ofdWDRFN9ZAco3ryguAlhC3DxW.",
//     phone: 9686079882,
//     name: "NNM23CS248 CHINMAY S L",
//   },
//   {
//     email: "nnm23is147@nmamit.in",
//     password: "97c615d892cc",
//     hashedPassword:
//       "$2b$12$oTSbqXIArEoheRGtk0rYYOvPbK7ZaG3yeQMffxH5rBSvygtz3nZj.",
//     phone: 9108927442,
//     name: "NNM23IS147 RISHIKA RAJESH KUMAR",
//   },
//   {
//     email: "nnm23cs095@nmamit.in",
//     password: "1a640dd31a72",
//     hashedPassword:
//       "$2b$12$1MMc0G/N9KO6nnmrBYo1qOlwAx6aMlj/P8DghgmQUK7loOMre3SpG",
//     phone: 7026301008,
//     name: "NNM23CS095 KHYATHI JAIN",
//   },
//   {
//     email: "nnm23ad038@nmamit.in",
//     password: "5b62e03af08b",
//     hashedPassword:
//       "$2b$12$rBk.DA2rHpj3euWhRzhXE.Gkf3GgsJARnW9VpXr8Y.lKebOH6NPdG",
//     phone: 9632229063,
//     name: "NNM23AD038 PREETHI DEEPAK JAVALI",
//   },
//   {
//     email: "nnm23ad067@nmamit.in",
//     password: "43774dbc98ca",
//     hashedPassword:
//       "$2b$12$lZ5aXdilNjJbvMEI1XK.fOLf1TqP1crggfRjv4TLB9it.mkPpR3N2",
//     phone: 9008336380,
//     name: "NNM23AD067 UTSAVI S RAI",
//   },
//   {
//     email: "nnm23cs241@nmamit.in",
//     password: "8224fae374b3",
//     hashedPassword:
//       "$2b$12$phRTZVxu4F5CIsNh7SEQFeOtQh11CHP03Na5lo/9PtCIOHmDAZnB.",
//     phone: 7259140756,
//     name: "NNM23CS241 AKSHAY B G",
//   },
//   {
//     email: "nnm23is212@nmamit.in",
//     password: "1e2f86db5e38",
//     hashedPassword:
//       "$2b$12$9iV9VWUl7Rza1N5ITNavIeZyZ3MOhdv/f7vT13IRcUqvRzR/oGvkC",
//     phone: 9535299491,
//     name: "NNM23IS212 VIGNESH N SALIAN",
//   },
//   {
//     email: "nnm23am037@nmamit.in",
//     password: "e5e86a06e614",
//     hashedPassword:
//       "$2b$12$w4l/yIVmUx5/YB7sHgMMfOWxhdkA7bBie3PMy31fVFCCvySxJ7ibK",
//     phone: 8660523537,
//     name: "NNM23AM037 N G TEJASWINI",
//   },
//   {
//     email: "nnm23cc064@nmamit.in",
//     password: "5150da0dc182",
//     hashedPassword:
//       "$2b$12$rGQXDsjKiGRvh6ewq7WjQeiV5aogHqplHZiTbZOINHrg2fQ8DRoDC",
//     phone: 7899901760,
//     name: "NNM23CC064 TANVI ROSEMARY SUARES",
//   },
//   {
//     email: "nnm23am038@nmamit.in",
//     password: "24cc5e6e75d0",
//     hashedPassword:
//       "$2b$12$Qt79l8yRjV3i8/Wd.AjnM.6T2aTJBoizFSwYPteHNzBvhaTCQA71e",
//     phone: 6362320199,
//     name: "NNM23AM038 NEELIMA BHAKTHA",
//   },
//   {
//     email: "nnm23cs507@nmamit.in",
//     password: "303ab1457523",
//     hashedPassword:
//       "$2b$12$yBjtRQ/dWTWMn5TsgghuHu2u73n15GQIRmO7//EcE2iqZac4eDs/W",
//     phone: 7975554847,
//     name: "RAKSHITH P R",
//   },
//   {
//     email: "nnm23cs505@nmamit.in",
//     password: "b1b92382669c",
//     hashedPassword:
//       "$2b$12$JVf/6nliOS1c4baLX1VWauwXLccIgE84iMQNbmCIdchztPalKA64u",
//     phone: 6362996767,
//     name: "NNM23CS505 K HARSHA S HAVALDAR",
//   },
//   {
//     email: "nnm23cs063@nmamit.in",
//     password: "e3e1b18d4cff",
//     hashedPassword:
//       "$2b$12$r.V8VT8A2KhYhshnlw7z1utQ2ubv/SEc5iG89LOX3C1r7SKaTCZq2",
//     phone: 9845883522,
//     name: "NNM23CS063 DHRUVA R S",
//   },
//   {
//     email: "nnm23am012@nmamit.in",
//     password: "a6fa88bb68f2",
//     hashedPassword:
//       "$2b$12$j/H98XzUX8SuGW8XaYo/gulpmILJ.G6AONRND/VwmKWdMl99zx6yW",
//     phone: 9164855050,
//     name: "NNM23AM012 ANVISH",
//   },
//   {
//     email: "nnm23is184@nmamit.in",
//     password: "4844d0418d11",
//     hashedPassword:
//       "$2b$12$HU1yLWtXtyD42tElbJWDGOZ.wvPKDaqr1NwLJMP7uMaJpjHjMuIDW",
//     phone: 7996072378,
//     name: "NNM23IS184 SRAJAN D PRABHU",
//   },
//   {
//     email: "nnm23is124@nmamit.in",
//     password: "2ea68f17bca2",
//     hashedPassword:
//       "$2b$12$WAgkCkd9OGtDDVMHc0T5QebvRFXpPDpISwzTa4DaGXGBXU0drO10u",
//     phone: 9019866590,
//     name: "NNM23IS124 POOJA",
//   },
//   {
//     email: "nnm23am057@nmamit.in",
//     password: "c8e2761b4290",
//     hashedPassword:
//       "$2b$12$X193yplhqwYn82czyR6H.Oybfm7z5BRJTkTUotJW7xuYjGWc.Bwua",
//     phone: 9380337296,
//     name: "NNM23AM057 SATHVIK P SHETTY",
//   },
//   {
//     email: "nnm23is139@nmamit.in",
//     password: "e9b7eff80a17",
//     hashedPassword:
//       "$2b$12$shhnFWXz7X4WonXe2X7k4enlvmy0AQ.w2u5c9VoUL7pYevOOR4TIu",
//     phone: 9686860257,
//     name: "NNM23IS139 PRATHVIRAJ BHAT",
//   },
//   {
//     email: "dip24cb04@nmamit.in",
//     password: "6d9646c12eb0",
//     hashedPassword:
//       "$2b$12$WtDxSNi63NJroqCzrPMV/um0CZbg59zDAs3I6upVLg/OXAue77472",
//     phone: 6363202785,
//     name: "DIP24CB04 PRATHEEKSHA",
//   },
//   {
//     email: "nnm23is127@nmamit.in",
//     password: "53610d95b93e",
//     hashedPassword:
//       "$2b$12$lkgSy3U9IgtyUXd.ZFVseO8WryfLcxoolTAmonITihk.1lY53GYNC",
//     phone: 8660475917,
//     name: "NNM23IS127 PRADVIN H AMIN",
//   },
//   {
//     email: "nnm23cb018@nmamit.in",
//     password: "86a29fd9894d",
//     hashedPassword:
//       "$2b$12$fCsjaznCugukf6HjrEOHW.pM14iYdc6ALBp3pKRn.Jn5seBAYpcmm",
//     phone: 7892401163,
//     name: "NNM23CB018 GAUTAMI M",
//   },
//   {
//     email: "nnm23ec152@nmamit.in",
//     password: "ec8d86017991",
//     hashedPassword:
//       "$2b$12$VO06wf9ceDQ.eTrnbwmrcO6ARIQkRYCCfYwRLMKaamsUR6qw7alPu",
//     phone: 8904012675,
//     name: "NNM23EC152 SAMHITHA",
//   },
//   {
//     email: "nnm23cc031@nmamit.in",
//     password: "73072a2cd9a4",
//     hashedPassword:
//       "$2b$12$b9qp/rpio6QusuLmjrN3DOqTGZX2sC6MJljh3dw83SuQECq4vWQam",
//     phone: 9108954937,
//     name: "NNM23CC031 NIREEKSH B SHETTY",
//   },
//   {
//     email: "nnm23cs164@nmamit.in",
//     password: "44f6809bb9e7",
//     hashedPassword:
//       "$2b$12$uBri2zBh.vaAE9Ol4ZFnzOPoQxYIbqYKHp4sSb72k6dhtY4J/OxN2",
//     phone: 9353400380,
//     name: "NNM23CS164 SAKSHI M SHETTY",
//   },
//   {
//     email: "nnm23ad034@nmamit.in",
//     password: "913dd49d62e7",
//     hashedPassword:
//       "$2b$12$nrnw7vnGzke5GRW8/QsVEOYS3LrTWU4JRHzIY/b/5z7jMq6U4p7YS",
//     phone: 9482644505,
//     name: "NNM23AD034 PRANJALI P A",
//   },
//   {
//     email: "nnm23cs208@nmamit.in",
//     password: "f17a536f1cd3",
//     hashedPassword:
//       "$2b$12$wxJenCJ1hs8bTOg2GtDIlO1loohqiV3YDkVIezh0Ny4/EE/cUJ5IC",
//     phone: 9632371803,
//     name: "NNM23CS208 SUJITH S SHETTY",
//   },
//   {
//     email: "nnm23is114@nmamit.in",
//     password: "f1a95fd8a273",
//     hashedPassword:
//       "$2b$12$WGSfuKjX5xy3CESXiOJG8eN6ofNFQ6O2el4vCNZPbECkY/u0jnsKi",
//     phone: 8102908376,
//     name: "Nishant Arya",
//   },
//   {
//     email: "nnm23cs158@nmamit.in",
//     password: "c40358fecf74",
//     hashedPassword:
//       "$2b$12$Vgxl27P1jXYWXAZCWntyqeZeZATIEqZrRXkoAuLAD3EJIQsbcr2lu",
//     phone: 8530539413,
//     name: "RONIT BHAT",
//   },
//   {
//     email: "nnm23cs287@nmamit.in",
//     password: "ca6342976c26",
//     hashedPassword:
//       "$2b$12$0/kYQj93WXNBnpItBEDq8OpR/MpQcfRuNtiCq9MJe/V8u/t0AqQdS",
//     phone: 6366586963,
//     name: "NNM23CS287 SOUJANYA",
//   },
//   {
//     email: "nnm23cs269@nmamit.in",
//     password: "5410d3eea2f1",
//     hashedPassword:
//       "$2b$12$KHqHsu1hQ3uE9NWbp0MsROTVFUj1ndvSkQzTiJZImLRpDXKwbnbh.",
//     phone: 9481875002,
//     name: "NNM23CS269 PIYUSH SINGH",
//   },
//   {
//     email: "nnm23cs274@nmamit.in",
//     password: "9c9ec53b7a12",
//     hashedPassword:
//       "$2b$12$xVmtyLKn2WkA7WtxXMBjb.yTGc.PSusVUwmudKUmZ2idl3dfhl4Tq",
//     phone: 9880836995,
//     name: "NNM23CS274 PRATHEEK S SHETTY",
//   },
//   {
//     email: "nnm23is104@nmamit.in",
//     password: "ec5de2c76cfa",
//     hashedPassword:
//       "$2b$12$bEl8TtnKoO3mWtzxAqOGAuaPD4cuy0NWm2HxqKgmbRolI9bbBXINi",
//     phone: 9880875045,
//     name: "NNM23IS104 NAVEEN S PRABHU",
//   },
//   {
//     email: "nnm23cs243@nmamit.in",
//     password: "16a7ecaa70a4",
//     hashedPassword:
//       "$2b$12$lxouW6DumPXkw0/iy38.2eyC83E3i3wyYgBixqa5w3vGBmREINDR.",
//     phone: 8618171276,
//     name: "NNM23CS243 ANKUSH K",
//   },
//   {
//     email: "nnm23is083@nmamit.in",
//     password: "1b857cb9eeb6",
//     hashedPassword:
//       "$2b$12$EHB3TnicdLNsjZ1IQoFV9u.lmj0crowDnrpD1lSPHwxJwapQ2MczK",
//     phone: 7259283869,
//     name: "NNM23IS083 K H SUSHANTH",
//   },
//   {
//     email: "nnm23cs189@nmamit.in",
//     password: "88ec06f0d573",
//     hashedPassword:
//       "$2b$12$hV7nV7rNUYrm/OayU7gWjuF/W0XARhOPPVMRhxAsSYUUC3UyshiNG",
//     phone: 9380273046,
//     name: "NNM23CS189 SHRAVYA NAYAK",
//   },
//   {
//     email: "nnm23is079@nmamit.in",
//     password: "da135c8dc4a5",
//     hashedPassword:
//       "$2b$12$80XwHnyNFsGqz5Sa9rQCb.8/lolDqDrfz79g/.vPX3XYSnOgGaJYW",
//     phone: 7338292306,
//     name: "NNM23IS079 JEETHESH",
//   },
//   {
//     email: "nnm23cs148@nmamit.in",
//     password: "21bf8bfbd6e2",
//     hashedPassword:
//       "$2b$12$7v/6pITFynpvB0.J2vW5IeT36ai/LPYYlyy6I9QLYVDJEkJGRoM.e",
//     phone: 8217020679,
//     name: "NNM23CS148 RAKSHITHA RAJU",
//   },
//   {
//     email: "nnm23cs130@nmamit.in",
//     password: "74765edfc8bc",
//     hashedPassword:
//       "$2b$12$C1ZhfKdmynchJUdY/5dXx.LgXL6IMR6honkeXEtP4hL9622TqmWy2",
//     phone: 9148663102,
//     name: "NNM23CS130 PRAJNA",
//   },
//   {
//     email: "nnm23ec147@nmamit.in",
//     password: "3c8daf60cda8",
//     hashedPassword:
//       "$2b$12$D4sJYqTRS2HhkkuEToVsGOnvNZ3W6dt6sEk1hmyLl7TuJ6CMNRyDW",
//     phone: 9108554184,
//     name: "NNM23EC147 SAHITHYA SHETTY T N",
//   },
//   {
//     email: "nnm23cs147@nmamit.in",
//     password: "aaee941f05a3",
//     hashedPassword:
//       "$2b$12$HgISJuaYIq76mbc/.DonXejDImr2lykENFcPmzc/yKKLP7B2pDIR2",
//     phone: 9483266090,
//     name: "NNM23CS147 RAKSHITA RAMACHANDRA HEGDE",
//   },
//   {
//     email: "nnm23cs190@nmamit.in",
//     password: "41fd71c39954",
//     hashedPassword:
//       "$2b$12$9Y/7vWsphHJfgyBIKG/I9egW1clwACeCxh2Ihp2TnPjmLTIvdGJ92",
//     phone: 8296098489,
//     name: "NNM23CS190 SHRESTA V SHETTY",
//   },
//   {
//     email: "nnm23cs067@nmamit.in",
//     password: "bbd458dfe34c",
//     hashedPassword:
//       "$2b$12$aHCMIB69eUnoqFKHReayGubc5s85Tsgl3NWjrHV4ZgUsjV9ipLA.S",
//     phone: 9632482269,
//     name: "NNM23CS067 DISHA SHETTY",
//   },
//   {
//     email: "nnm23am011@nmamit.in",
//     password: "4009ac94fc67",
//     hashedPassword:
//       "$2b$12$9gWDbzFftvV8oqWRr0mxuOGJ.ZmYWSZT9D.7zVH8kxBVQXT5qgBFu",
//     phone: 9353624951,
//     name: "NNM23AM011 ANVESH DSOUZA",
//   },
//   {
//     email: "nnm23is082@nmamit.in",
//     password: "0b91b8964568",
//     hashedPassword:
//       "$2b$12$BhPRTasHbPi5BkxRHjwYd.eqQhTnwlAq5f/QHruUdtLxc0i.CtZeq",
//     phone: 7483874594,
//     name: "NNM23IS082 K ARAVIND KAMATH",
//   },
//   {
//     email: "nnm23cb025@nmamit.in",
//     password: "890c835c70cc",
//     hashedPassword:
//       "$2b$12$hCvxWZuD8mIs75JHwAwOs.xJyjBirKpK7F.FmddaxuxFcADT8NHl.",
//     phone: 9744487012,
//     name: "NNM23CB025 KRITHI G RAO",
//   },
//   {
//     email: "nnm23cs097@nmamit.in",
//     password: "177625f34a34",
//     hashedPassword:
//       "$2b$12$E0G5m1p7d05P.IppwXxPkOyLAsxq6BGq8sUmXen7ZV0VIiY8bQt6W",
//     phone: 7208325100,
//     name: "NNM23CS097 KOTIAN DISHITA DAYANAND",
//   },
//   {
//     email: "nnm23cb005@nmamit.in",
//     password: "a6d7c3a7782a",
//     hashedPassword:
//       "$2b$12$W5RzYn4VNzA7e4T9GLPr6utbCPI9neIVTHK1uu8clPt9/QBE5niWK",
//     phone: 7338576045,
//     name: "NNM23CB005 ADVITH RAI",
//   },
//   {
//     email: "nnm23cs260@nmamit.in",
//     password: "197cba7b88ae",
//     hashedPassword:
//       "$2b$12$1A4rC1OWpWF2UAs5umpctujuQCg/Mkh7j4aWaP.o2o81tvuozD6Pe",
//     phone: 6360329493,
//     name: "NNM23CS260 MANASWINI R ACHARYA",
//   },
//   {
//     email: "nnm23am065@nmamit.in",
//     password: "de4aecc3bd9b",
//     hashedPassword:
//       "$2b$12$67ULWQHmlcBgCKJvBR9C6.o5BMqpCYrw0Tiv2xPQoYijXwk0HB7DO",
//     phone: 9108262847,
//     name: "NNM23AM065 SUJAN K S",
//   },
//   {
//     email: "nnm23ri069@nmamit.in",
//     password: "e9f760937289",
//     hashedPassword:
//       "$2b$12$8bpahkPXjDO6XBGl2L6VPOMwcZoR9k3Zic9DtHnvzWTqeN4kCwepC",
//     phone: 7204778068,
//     name: "NNM23RI069 VIDHATHRI BHAT S",
//   },
//   {
//     email: "nnm23cs101@nmamit.in",
//     password: "e040f4646716",
//     hashedPassword:
//       "$2b$12$tlC45I8asN7DlXfpOmojr.fZIHofbMJKqSoPX1yXaGCove0Zr3lGm",
//     phone: 8105309213,
//     name: "NNM23CS101 KUSHI S SHETTY",
//   },
//   {
//     email: "nnm22cc026@nmamit.in",
//     password: "b62f073228be",
//     hashedPassword:
//       "$2b$12$GbgjgGy48iUJ3x0zlLilPeOmLVQsNYh70uv2YOW8sm42UoUSABMrO",
//     phone: 9449450405,
//     name: "NNM22CC026 K P BHOOMIKA RAI",
//   },
//   {
//     email: "nnm23am013@nmamit.in",
//     password: "0fa5d7d22ccb",
//     hashedPassword:
//       "$2b$12$LRFT1ajJC1QQ77dzR5VRP..iVVZhKWWzAr3vLPzMUUql1dH6ZeTOm",
//     phone: 9483886528,
//     name: "NNM23AM013 ARYA G BHAT",
//   },
//   {
//     email: "nnm23am058@nmamit.in",
//     password: "921d51c23e7e",
//     hashedPassword:
//       "$2b$12$GEhpmHD1YJ5YdXnBF.rtEeTstbOkMDxE0ZwYC7iAVVfkv9I/y4O7O",
//     phone: 6362006971,
//     name: "NNM23AM058 SATHWIK S SALIAN",
//   },
//   {
//     email: "nnm23cs068@nmamit.in",
//     password: "6bd39a0fa21c",
//     hashedPassword:
//       "$2b$12$Yobc7wamu8ld6HOu0meNDugG.VxjJTkR2dYffECBhPJS.RJrUHBFy",
//     phone: 8861894767,
//     name: "NNM23CS068 DIVYA R",
//   },
//   {
//     email: "nnm23am068@nmamit.in",
//     password: "d4eaf9c9b261",
//     hashedPassword:
//       "$2b$12$VQm1m4krb8j03sxi3Bqzq.yTwmPVVmKKlBiW6T4KSRVm6W8Fy6VBO",
//     phone: 8867386362,
//     name: "NNM23AM068 VAISHNAVI SHETTY",
//   },
//   {
//     email: "nnm23ri039@nmamit.in",
//     password: "3314a2e9ca7e",
//     hashedPassword:
//       "$2b$12$X6ahC.yQYRJvAh0W/GI.VOx3R2iFhp3V5rnqIHgZSP/favhpMn1Xy",
//     phone: 9900293185,
//     name: "NNM23RI039 N AJAY G KAMATH",
//   },
//   {
//     email: "nnm23cs057@nmamit.in",
//     password: "ff50c6317d5b",
//     hashedPassword:
//       "$2b$12$twHtoFriggaXHYFmTav3FuKoBVa6SjHBiiF2pI2cgYuLTxXHe4oHS",
//     phone: 8105906225,
//     name: "NNM23CS057 DEEPTHI HEGDE",
//   },
//   {
//     email: "nnm23is141@nmamit.in",
//     password: "d5e491550969",
//     hashedPassword:
//       "$2b$12$qS2PBxbDwrhYzTYmhfdADe7zAH3mnCFfGISqNSskXIGu2.CN0brM.",
//     phone: 9606520907,
//     name: "NNM23IS141 RAJATH D SHETTY",
//   },
//   {
//     email: "nnm23cs174@nmamit.in",
//     password: "74cc8ab5ead7",
//     hashedPassword:
//       "$2b$12$YhIMkCCc/3T7jbmhvemSoOaSWUgtuWmg/skhC3feO9oGUuxtM23GO",
//     phone: 9480414226,
//     name: "NNM23CS174 SHAMATHMIKA",
//   },
//   {
//     email: "nnm22is023@nmamit.in",
//     password: "aeb3496cea71",
//     hashedPassword:
//       "$2b$12$jEHg3MXFMi/7Z4zgEGwg4.dJG/y2Bz39zjqYmzi7QfKOCEAp9.W8q",
//     phone: 9108743782,
//     name: "NNM22IS023",
//   },
//   {
//     email: "nnm23cs152@nmamit.in",
//     password: "b5f7a4f8498a",
//     hashedPassword:
//       "$2b$12$QTnkPL6X0TN9RC0z0Q.UMe.0/1xUE0dy2GUx.1Yc9NvGSEXn7XYSi",
//     phone: 9449664395,
//     name: "NNM23CS152 RHEA DRINA KARKADA",
//   },
//   {
//     email: "nnm23cs070@nmamit.in",
//     password: "cced4190024b",
//     hashedPassword:
//       "$2b$12$hSBhpcgISiPJgqBdUsyveelR4Dh3yLKr331jKzp40vB0xBQ2pRrri",
//     phone: 9900152495,
//     name: "NNM23CS070 DIYA SHETTY",
//   },
//   {
//     email: "nnm23is015@nmamit.in",
//     password: "9096cb53c298",
//     hashedPassword:
//       "$2b$12$zghr/tWFVcaBc7iUdRsFM.3NsbQS7LIfcMiIY8dEzpc1ei1zJSfzi",
//     phone: 9019806291,
//     name: "NNM23IS015 ANKITHA",
//   },
//   {
//     email: "nnm23cs062@nmamit.in",
//     password: "59d339b62481",
//     hashedPassword:
//       "$2b$12$Atj2CCyNGLhmIaci.Uni8O7XTGXQzOjW0b.wgGY8C6WXD23Msi6nu",
//     phone: 7899122878,
//     name: "NNM23CS062 DHEERAJ RAI P",
//   },
//   {
//     email: "nnm23am066@nmamit.in",
//     password: "7244cb145b68",
//     hashedPassword:
//       "$2b$12$1DGUhlJBSxXQ4x1NmekDjOTF3yorxJv.9ZlESMHQOgi6.3fY48cgW",
//     phone: 9972799308,
//     name: "NNM23AM066 SUVIN",
//   },
//   {
//     email: "nnm23is148@nmamit.in",
//     password: "f1909092c6f3",
//     hashedPassword:
//       "$2b$12$P4XuGm8x3W8qAQA5tB7Js.D75um6btqzQAGQe1QzwAaV1LxsHeeuq",
//     phone: 9606844006,
//     name: "NNM23IS148 RIYA ANN",
//   },
//   {
//     email: "nnm23cs206@nmamit.in",
//     password: "7b4ed5c0a929",
//     hashedPassword:
//       "$2b$12$Ga58o.0c8gZyFf4R9tCmp.HQXoc92sIT9t3FknE/SVfk8xygTtQGe",
//     phone: 8762690686,
//     name: "NNM23CS206 STUTHI",
//   },
//   {
//     email: "nnm23cs119@nmamit.in",
//     password: "235fdeedafb3",
//     hashedPassword:
//       "$2b$12$T1ZW0i8c0OrVlsXXN17jHuZ/e8V5sgZBEVqaRROsvukRM/diqIccK",
//     phone: 8431720249,
//     name: "NNM23CS119 NERENKI POOJITH",
//   },
//   {
//     email: "nnm23ri011@nmamit.in",
//     password: "c65f486c0b39",
//     hashedPassword:
//       "$2b$12$Z0tYKPP2ZxLFU86DEd0lNulrSUW3cO1HGNyjsKPJg3anWawkzwgmG",
//     phone: 8970229851,
//     name: "NNM23RI011 AYUSH",
//   },
//   {
//     email: "nnm23cs211@nmamit.in",
//     password: "a8326e44a118",
//     hashedPassword:
//       "$2b$12$8ZihpgGJb7Xnasf9f/Rex.TtVwvh8ZwcMYxXg7HL6bDlmsmZmupzu",
//     phone: 8660108860,
//     name: "NNM23CS211 SUSHANYA N",
//   },
//   {
//     email: "nnm23cc045@nmamit.in",
//     password: "2623bb45a987",
//     hashedPassword:
//       "$2b$12$fdlGZ6wNWn93YRx5tbWCXux0Tr0WUECZta3LzGBH1Fr.C55PwktN6",
//     phone: 9481375588,
//     name: "NNM23CC045 RAMNATH S PRABHU",
//   },
//   {
//     email: "nnm23cs128@nmamit.in",
//     password: "c916272ad4a3",
//     hashedPassword:
//       "$2b$12$hrNrtSS9sC5ZeISGyA9ZVekT0yeg2P9Fc7.LW7wQfFU9uMfxrgr7.",
//     phone: 7829426670,
//     name: "NNM23CS128 PRADYUMNA BHANDARY",
//   },
//   {
//     email: "nnm23cs273@nmamit.in",
//     password: "3d321d83a4a4",
//     hashedPassword:
//       "$2b$12$kmpxvC8UdQrTLPXxHvtZgeoq0oNiaH8jntKW6mn6y89Volfpn7zEy",
//     phone: 8310546238,
//     name: "NNM23CS273 PRATHAM RAMAKRISHNA PANDIT",
//   },
//   {
//     email: "nnm22is084@nmamit.in",
//     password: "e7117499d438",
//     hashedPassword:
//       "$2b$12$kzz6ZyOLhKURuNQHE74UNenW8VZXjdKoLiIHf49O.gPthSoXT6bGq",
//     phone: 9483912772,
//     name: "NNM22IS084 M NAGASHREE PAI",
//   },
//   {
//     email: "nnm22is040@nmamit.in",
//     password: "6bc4c89b203b",
//     hashedPassword:
//       "$2b$12$HPz1ENtHYpydSRDE4M8sROtX3L6uxNVORoWAQ094SEb4/uz/fqi/G",
//     phone: 9482873367,
//     name: "CHAYA BALLAL",
//   },
//   {
//     email: "nnm23cc069@nmamit.in",
//     password: "8f36243a613c",
//     hashedPassword:
//       "$2b$12$C8CK9GbtgAFdYyJL218z2.QTgcs2fU2WEen5UuHEZMtC.N7d94q4S",
//     phone: 9740237290,
//     name: "NNM23CC069 VAISHNAVI V BHAT",
//   },
//   {
//     email: "nnm23cs256@nmamit.in",
//     password: "f2acc3028c19",
//     hashedPassword:
//       "$2b$12$2gRfTqjzK9zbo7TkzTFQ0eAWVLzGtAwgb2bufi7TYjEEzGRmQSiAW",
//     phone: 7989777877,
//     name: "NNM23CS256 KHADAR BADAR HARIHARANATH",
//   },
//   {
//     email: "nnm23cs031@nmamit.in",
//     password: "447c4f4f017d",
//     hashedPassword:
//       "$2b$12$alh7gdFly79Inbb3og7XbO6iowQmw3M4Uyq4JBnpTfE3eJzluMds.",
//     phone: 7019159303,
//     name: "NNM23CS031 ANNAPOORNA G PADIYAR",
//   },
//   {
//     email: "nnm23is161@nmamit.in",
//     password: "68ff2af26de2",
//     hashedPassword:
//       "$2b$12$zfi/BdoG5aOibm8cejiW4OvfDRMyJvTUkZclA5CEOC90omU.PX3ze",
//     phone: 7483690309,
//     name: "NNM23IS161 SANJANA KINI B",
//   },
//   {
//     email: "nnm23cs187@nmamit.in",
//     password: "baac9df29295",
//     hashedPassword:
//       "$2b$12$rseY7GU2R02Uvh6XMthDn.QNMfc86bcX9X1TgN/LBjGFk6dRIPlVe",
//     phone: 9972689592,
//     name: "NNM23CS187 SHRADDHA",
//   },
//   {
//     email: "nnm23cs221@nmamit.in",
//     password: "7396e3295de4",
//     hashedPassword:
//       "$2b$12$D3ifJAEY31flXDB.lVKWfuHfz1xMIGsekHiE0mDm2MXfdynonFRNK",
//     phone: 7022472620,
//     name: "NNM23CS221 THRISHA K",
//   },
//   {
//     email: "nnm23is075@nmamit.in",
//     password: "75908e2fd359",
//     hashedPassword:
//       "$2b$12$hNjtyCYEzqD6rRbTWLHdB.sUJgoN2W.FdDbPZDxbikRA8u8fYr/MG",
//     phone: 7022687603,
//     name: "NNM23IS075 HARDHIK R SHETTY",
//   },
//   {
//     email: "nnm23cb020@nmamit.in",
//     password: "68fa486fb736",
//     hashedPassword:
//       "$2b$12$Q70HUZnEcvUewe8pdu5uhOZ6E.D.q/z4lydl4IP/733thEG7JW1g6",
//     phone: 8547213354,
//     name: "NNM23CB020 HRIDYA HARINDRAN K",
//   },
//   {
//     email: "nnm23cs114@nmamit.in",
//     password: "7a41b2b65241",
//     hashedPassword:
//       "$2b$12$HkjjIYBl3tqWazra7rJVb.oSgpCXzeGxksLjhDh6e.MJwts.PjKMe",
//     phone: 8296155779,
//     name: "NNM23CS114 NAIK VIKAS ROHIDAS",
//   },
//   {
//     email: "nnm23cs268@nmamit.in",
//     password: "97a687290ed0",
//     hashedPassword:
//       "$2b$12$H9s0nnsyMDanMoh0zw4yg.3gBojhthfjMivFCACT7Kh3I8TUVpySS",
//     phone: 8971002128,
//     name: "NNM23CS268 NISHMITHA",
//   },
//   {
//     email: "nnm23cs276@nmamit.in",
//     password: "743e158f9d53",
//     hashedPassword:
//       "$2b$12$XmUSNhcW21javO7zXdY6TeXG8y3BJSWEOeCznuTpDg9cSdkRKPOhu",
//     phone: 8904375939,
//     name: "NNM23CS276 PRERANA R",
//   },
//   {
//     email: "nnm23cs002@nmamit.in",
//     password: "d244694c1a85",
//     hashedPassword:
//       "$2b$12$OuCmDnCCvh0ZqY74KTuNaOuKYiK9vPtlXUBPYCfRQvrg/32nH3c2W",
//     phone: 9380477401,
//     name: "NNM23CS002 A C MANIKANTA SHETTY",
//   },
//   {
//     email: "nnm23cs009@nmamit.in",
//     password: "40da30bcd094",
//     hashedPassword:
//       "$2b$12$HTgz67PpoCmUyk0Wxs9Uy.7hEfq33lvpUTmSBe7oYhd8wEi/gsgV.",
//     phone: 8453846060,
//     name: "NNM23CS009 ADISH G PALAN",
//   },
//   {
//     email: "nnm23cs032@nmamit.in",
//     password: "b399801bfa09",
//     hashedPassword:
//       "$2b$12$bQnJRZrifvL9bBfMUmdhc.Gjj7BUX/K7MbmyVWoK9MlQdZ72ZyGVy",
//     phone: 8050503514,
//     name: "NNM23CS032 ANSHUL SHETTY",
//   },
//   {
//     email: "nnm23is058@nmamit.in",
//     password: "717c2ae8228c",
//     hashedPassword:
//       "$2b$12$TeOCJ1.N.D8NkgrC3dn.XOHgASbFpvGli4rYpCZNsKT1wwgWMzOFK",
//     phone: 7619263873,
//     name: "NNM23IS058 DHRITI HEGDE",
//   },
//   {
//     email: "nnm23cs082@nmamit.in",
//     password: "4d4046dac68f",
//     hashedPassword:
//       "$2b$12$/.AN5AIaGtqeZlfUBmhUVOO7lHqnuLhO2mfJfIg0r/uMdiClYiGRy",
//     phone: 8217085323,
//     name: "NNM23CS082 HARSHEEL S GOWDA",
//   },
//   {
//     email: "nnm23cs020@nmamit.in",
//     password: "34ea1b766822",
//     hashedPassword:
//       "$2b$12$SdhhHFBrwmyi6Ob59wXkA.rjKRl/w.6c.xQDkxyKtsF31Pep32H8S",
//     phone: 9148823298,
//     name: "NNM23CS020 ALDEN EDWIN PAIS",
//   },
//   {
//     email: "nnm23cs033@nmamit.in",
//     password: "9487037cfdfa",
//     hashedPassword:
//       "$2b$12$8lOAHlTyQ6Bf3SJa8PUzpufhzs2fgEkt.0Rl9MEigRcIISQ9mmWCS",
//     phone: 9606165951,
//     name: "NNM23CS033 ANUJITH S NAYAK",
//   },
//   {
//     email: "nnm23cs027@nmamit.in",
//     password: "25e9776f644e",
//     hashedPassword:
//       "$2b$12$53oLLo0ueMD/qifWo1teeu1ZaMUP6.XQg5ypR3ey6YLl9NI14UEb.",
//     phone: 7338348703,
//     name: "NNM23CS027 ANIKETH K",
//   },
//   {
//     email: "nnm23is051@nmamit.in",
//     password: "26a37ff4999c",
//     hashedPassword:
//       "$2b$12$6AP9ngorO8aNa9Uk.cu7lOUXJw/tbHpsrz84nu/b.c0vIwntqb0kS",
//     phone: 8105573725,
//     name: "NNM23IS051 DHANUSH R",
//   },
//   {
//     email: "nnm23is062@nmamit.in",
//     password: "760949cdaf8b",
//     hashedPassword:
//       "$2b$12$SQTrvIHrQX2jLlrpPpkL3uQqUR6jh2N7WL1EMHGwnyERezBaZxAqa",
//     phone: 8073770572,
//     name: "NNM23IS062 DISHA RANI",
//   },
//   {
//     email: "nnm23cs283@nmamit.in",
//     password: "5dd6c07624ce",
//     hashedPassword:
//       "$2b$12$fSzXAI55hp725TM42RtMZuI82P2drCv.GClpyIM6Fsj0zuK3x7E7y",
//     phone: 8618027470,
//     name: "NNM23CS283 SAMUEL RODRIGUES",
//   },
//   {
//     email: "nnm23cc058@nmamit.in",
//     password: "c3f8e12c1321",
//     hashedPassword:
//       "$2b$12$Lx1DrieGaZdJ8ahPwh/J8.HHOIdjvv/8Fmjz1qDNn30hzU.AEn8ue",
//     phone: 9482161732,
//     name: "NNM23CC058 SHIVANI",
//   },
//   {
//     email: "nnm23cs129@nmamit.in",
//     password: "9e9ce5386e9d",
//     hashedPassword:
//       "$2b$12$kvFaWR/F5X8M95zSHhU9OeBE41FEPRwOxIBNYYFWu/nne4cx2HU/.",
//     phone: 8904844705,
//     name: "NNM23CS129 PRAJAY M S VARMA",
//   },
//   {
//     email: "nnm23cc071@nmamit.in",
//     password: "2b231f927571",
//     hashedPassword:
//       "$2b$12$Y9kq5st5KU1TIJm09ew4WuJYI3RRMmiBrD1ti36BRFxfDpNpuNLui",
//     phone: 7338609912,
//     name: "NNM23CC071 VISHMITHA V SALIAN",
//   },
//   {
//     email: "nnm23ad033@nmamit.in",
//     password: "4c39ed6e2e00",
//     hashedPassword:
//       "$2b$12$1pZD3zAia8v45mb3HHwYxuC/Q9R3GEArm0CaAK2yuG8pch.iPANh.",
//     phone: 8296598451,
//     name: "NNM23AD033 PALLAVI PAI",
//   },
//   {
//     email: "nnm23bt043@nmamit.in",
//     password: "703b073dabe9",
//     hashedPassword:
//       "$2b$12$w/2PB35hUDdc7isJz3rEMO30JguoSQnIgYpgCSexZ5ShRaT4HilKG",
//     phone: 9880142514,
//     name: "NNM23BT043 PRATIKSHA NAYAK",
//   },
//   {
//     email: "nnm23ri040@nmamit.in",
//     password: "2b2a7de58b6e",
//     hashedPassword:
//       "$2b$12$KenHg3rFrUQgqpVTgU.Coe0thNKpdRmKFqw5ca1rCQzBR4IiqUrSm",
//     phone: 8919203591,
//     name: "NNM23RI040 NALLUR SHREEJA",
//   },
//   {
//     email: "nnm23cs142@nmamit.in",
//     password: "1015b929e70b",
//     hashedPassword:
//       "$2b$12$4zupyKc8ruadyvK9ox4/eeAIJQVfJ.dnMFtv1qfFH2r9.tea2IFp2",
//     phone: 9110623554,
//     name: "NNM23CS142 PUNYA H V",
//   },
//   {
//     email: "nnm23cc026@nmamit.in",
//     password: "971b3c7eef6c",
//     hashedPassword:
//       "$2b$12$ZE0.yYL158l5/PhIMuzJeus.2Z/Yz8UwfXiIE/WeO.UoQXELI3vMG",
//     phone: 8095382640,
//     name: "NNM23CC026 KRISSEL RHEA MONTEIRO",
//   },
//   {
//     email: "nnm23ri064@nmamit.in",
//     password: "af1d6a02bace",
//     hashedPassword:
//       "$2b$12$Upf6mNenFl83zqVhy2c5QOD.oA5yXK.v/bKP7Ksh4sxqMk.xLjMK2",
//     phone: 7022052434,
//     name: "NNM23RI064 SWATHI S SHETTY",
//   },
//   {
//     email: "nnm23ac009@nmamit.in",
//     password: "71676ccea07c",
//     hashedPassword:
//       "$2b$12$YpUKkCobPnoUUPchf0.f..k.i1vCHlVQEnab8REIUrkC8kHCjyOzS",
//     phone: 7204309724,
//     name: "NNM23AC009 AVISHKA ARUN KUMAR",
//   },
//   {
//     email: "nnm23cs195@nmamit.in",
//     password: "93ac0b0a321d",
//     hashedPassword:
//       "$2b$12$VCwzrq3OwKoslL5JZCCSrumwzcd7HJauJqUgMMMQoS0r2AROCJ0xC",
//     phone: 8317390137,
//     name: "NNM23CS195 SHREYAS KAMATH P",
//   },
//   {
//     email: "nnm23am026@nmamit.in",
//     password: "785a0f5d69f3",
//     hashedPassword:
//       "$2b$12$RQs9pcDQLikSQLy0S68KaemwPRwLlIu2z76Y2mgaAynw/MWo28.Pq",
//     phone: 9141106073,
//     name: "NNM23AM026 KRUTHI KRUPANANDA",
//   },
//   {
//     email: "nnm23cs290@nmamit.in",
//     password: "0b99e19654c2",
//     hashedPassword:
//       "$2b$12$WfN9BKKm8VGCA8x/ny6creAAhPvzxIajdwzCr2qmCKn2ho0iYoOi6",
//     phone: 9113059685,
//     name: "NNM23CS290 TEJASWINI RAO",
//   },
//   {
//     email: "nu24s28@nmamit.in",
//     password: "d6b2f2e08aa8",
//     hashedPassword:
//       "$2b$12$JymtKuCOf/XBgaZcE9Ng7O5ovfm4ESTdejvNdb3WYC0J/rxzhSxFC",
//     phone: 9741407902,
//     name: "NU24S28 SUMANTH K",
//   },
//   {
//     email: "nnm23am033@nmamit.in",
//     password: "9f2a9f45fecb",
//     hashedPassword:
//       "$2b$12$kxnEJGwRzXivRHXP0K9YtOf/3xuMAUie/ueSH/Yb7M0KsLV7mDvBG",
//     phone: 8147852950,
//     name: "NNM23AM033 MOHAMMED AZMI",
//   },
//   {
//     email: "nnm23am001@nmamit.in",
//     password: "72f5b35c1ca2",
//     hashedPassword:
//       "$2b$12$8WyX4Fhxdl8TpUGi2kXn9O.bWGBhYRj7RZHVNyE7kvEdMiocecXpq",
//     phone: 9036125780,
//     name: "NNM23AM001 ADEEB BIN ASHRAF",
//   },
//   {
//     email: "nnm23ec144@nmamit.in",
//     password: "2155b764d7c7",
//     hashedPassword:
//       "$2b$12$eNteKFkCkHOhl30zGQSCaukuDfJLsV.N77rFq9Mxg47CeaKxtrZRO",
//     phone: 9567085952,
//     name: "NNM23EC144 S S NISHANTHINI",
//   },
//   {
//     email: "nnm23am031@nmamit.in",
//     password: "bc7782e05fef",
//     hashedPassword:
//       "$2b$12$raiF5O1BOa8vod9BCU389OBziAbg1ZduuCXYt2RmMQYpamXKJkorK",
//     phone: 9148664972,
//     name: "MOHAMMED AFRAZ",
//   },
//   {
//     email: "nnm23am059@nmamit.in",
//     password: "34e21fabfc72",
//     hashedPassword:
//       "$2b$12$spNnOWM6E9kl3FZh7yuFS.a5V831p/n7eWBZOuYIy0iWLaMH89ODy",
//     phone: 8050493583,
//     name: "NNM23AM059 SATHWIK U SHETTY",
//   },
//   {
//     email: "nnm23cs023@nmamit.in",
//     password: "fc02e13914f3",
//     hashedPassword:
//       "$2b$12$aQ7K3VaN4k7c2MvAvbCc5eKbzb.X7nm5y6l2oNN4QOu0p3BOlWW/6",
//     phone: 8660990825,
//     name: "NNM23CS023 AMULYA AITHAL",
//   },
//   {
//     email: "nnm23cs011@nmamit.in",
//     password: "c41866827be1",
//     hashedPassword:
//       "$2b$12$2chPEKX9lifCf9fSMAWNQuM49He168pkUtSMjIJNADvfaHQsk2.cy",
//     phone: 7349728983,
//     name: "NNM23CS011 ADITI ANIL KAMATH",
//   },
//   {
//     email: "nnm23cs060@nmamit.in",
//     password: "38e1680af0de",
//     hashedPassword:
//       "$2b$12$7OPNbPSul9jzNzp4.5dL0.H10Bqo1AefdfyxoxDEdpGtDbVwC1Gpm",
//     phone: 7483389776,
//     name: "Dhanush Shetty",
//   },
//   {
//     email: "nnm23cs232@nmamit.in",
//     password: "4efab1ef10ed",
//     hashedPassword:
//       "$2b$12$jopgMzldn4XVyliBA.ToaeMsKheMQ2c2wEPA8./zQU/RRUDkVYppu",
//     phone: 7349112989,
//     name: "Vinush",
//   },
// ];
