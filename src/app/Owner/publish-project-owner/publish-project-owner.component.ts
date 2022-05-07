import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Project} from "../../model/project";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-publish-project-owner',
  templateUrl: './publish-project-owner.component.html',
  styleUrls: ['./publish-project-owner.component.css']
})
export class PublishProjectOwnerComponent implements OnInit {

  projectForm!: NgForm;
  projectData: Project = {} as Project;

  constructor(private projectApiService: ProjectService) { }

  ngOnInit(): void {
  }

  AddProject(): void{
    const newProject = {
      name: this.projectData.name,
      obj: this.projectData.obj,
      description: this.projectData.description
    };
    this.projectApiService.create(newProject).subscribe((response:any) =>{
      console.log(response)
    })
  }
}
