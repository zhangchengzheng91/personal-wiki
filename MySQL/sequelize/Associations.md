A source model, B target model

|方法|主表|从表|关系|
|:---|:---|:---|:---|
|A.hasOne(B)|A|B|One-To-One|
|A.belongsTo(B)|B|A|One-To-One|
|A.hasMany(B)|A|B|One-To-Many|
|A.belongsToMany(B, { through: 'C' })||||


