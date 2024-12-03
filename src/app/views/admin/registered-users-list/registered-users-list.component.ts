import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {AdminService} from "../../../services/admin/admin.service";

@Component({
  selector: 'app-registered-users-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    DatePipe
  ],
  templateUrl: './registered-users-list.component.html',
  styleUrl: './registered-users-list.component.css'
})
export class RegisteredUsersListComponent implements OnInit{
  registeredUsers: any[] = []
  displayedColumns: string[] = ['id', 'email', 'created_at']

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.registeredUsers().subscribe({
      next: (value) => (this.registeredUsers = value)
    })
  }

}
