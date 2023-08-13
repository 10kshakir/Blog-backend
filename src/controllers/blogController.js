const express = require("express");
const blogModel =require("../models/blogModel");

exports.getAllBlog = async(req,res)=>{
      try {
            
            const blogs = await blogModel.find();
            res.status(200).send({msg:"getAllBlog request success",data:blogs});

      } catch (error) {
            res.status(400).send({msg:" getAllBlog request failed"});
      }
}

exports.creatBlog =async (req,res)=>{
      try {
            
            if (!req.body.Title) {
                  return res.json({error: "title required for the body"})
            }
            if (!req.body.Content) {
                  return res.json({error: "content required for the body"});
            }
            if (!req.body.Author) {
                  return res.json({error: "author required for the body"});
            }
            const blog = await blogModel.create({
                  Title: req.body.Title,
                  Content:req.body.Content ,
                  Author: req.body.Author
                 
            });
            res.status(200).send({msg:"creatBlog request success",data:blog});


            
      } catch (error) {
            res.status(400).send({msg:"creatBlog request failed"});

      }
}

exports.getSingleBlog=async (req,res)=>{
      try {
            const blog =await blogModel.findOne({_id:req.params.id});
            res.status(200).send({msg:"singleBlog request success",data:blog});

            
      } catch (error) {
            res.status(400).send({msg:"getSingleBlog request failed"});
            
      }
};

exports.blogByTitle=async (req,res)=>{
      try {
            const blog =await blogModel.findOne({Title:req.params.title});
            res.status(200).send({msg:"singleBlog request success",data:blog});

            
      } catch (error) {
            res.status(400).send({msg:"getSingleBlog request failed"});
            
      }
};

exports.deleteBlog= async (req,res)=>{
      try {
            await blogModel.deleteOne({_id:req.params.id});
            res.send({msg:"successfully deleted"});

      } catch (error) {
            res.status(400).send({msg:"deleteBlog request failed"});
            
      }
}

exports.updateBlog = async (req,res)=>{
      try {
            const blog = await blogModel.findOne({_id: req.params.id});

            if (req.body.Title) {
                  blog.Title=req.body.Title
            }
            if (req.body.Content) {
                  blog.Content=req.body.Content
            }

            if (req.body.Author) {
                  blog.Author=req.body.Author
            }
            await blog.save();
            res.status(200).json({blog});
      } catch (error) {
            res.status(404);
            res.send(
                  {error: "blog doesn't exist!"}
            );
      }
}