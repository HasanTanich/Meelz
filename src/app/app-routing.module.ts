import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { ChefComponent } from './core/chef/chef.component';
import { TermsOfUseComponent } from './core/privacy/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './core/privacy/privacy-policy/privacy-policy.component';
import { ChefDetailsComponent } from './core/chef/chef-details/chef-details.component';
import { MasterClassesComponent } from './core/master-classes/master-classes.component';
import { MasterClassesEditComponent } from './core/master-classes/master-classes-edit/master-classes-edit.component';
import { MasterClassesEditHeaderComponent } from "./core/master-classes/master-classes-edit/master-classes-edit-header/master-classes-edit-header.component";
import { MasterClassesEditProgramComponent } from "./core/master-classes/master-classes-edit/master-classes-edit-program/master-classes-edit-program.component";
import { MasterClassesEditRequiredComponent } from "./core/master-classes/master-classes-edit/master-classes-edit-required/master-classes-edit-required.component";
import { MasterClassesEditParticipateComponent } from "./core/master-classes/master-classes-edit/master-classes-edit-participate/master-classes-edit-participate.component";
import { MasterClassesEditDatesComponent } from './core/master-classes/master-classes-edit/master-classes-edit-dates/master-classes-edit-dates.component';
import { ChefDetailsTabMeelzComponent } from './core/chef/chef-details/chef-details-tab-meelz/chef-details-tab-meelz.component';
import { ChefDetailsTabRecipeComponent } from './core/chef/chef-details/chef-details-tab-recipe/chef-details-tab-recipe.component';
import { ChefDetailsTabChefstoreComponent } from './core/chef/chef-details/chef-details-tab-chefstore/chef-details-tab-chefstore.component';
import { ChefDetailsTabMasterclassesComponent } from './core/chef/chef-details/chef-details-tab-masterclasses/chef-details-tab-masterclasses.component';
import { ChefDetailsTabCheftableComponent } from './core/chef/chef-details/chef-details-tab-cheftable/chef-details-tab-cheftable.component';
import { ChefDetailsTabBlogpostsComponent } from './core/chef/chef-details/chef-details-tab-blogposts/chef-details-tab-blogposts.component';
import { MenuComponent } from "./core/menu/menu.component";
import { MenuDetailsComponent } from "./core/menu/menu-details/menu-details.component";
import { ChefTableComponent } from "./core/chef-table/chef-table.component";
import { ChefTableDetailsComponent } from "./core/chef-table/chef-table-details/chef-table-details.component";
import { MealKitsComponent } from "./core/meal-kits/meal-kits.component";
import { MealKitsDetailsComponent } from "./core/meal-kits/meal-kits-details/meal-kits-details.component";
import { MealKitsDetailsIngredientsComponent } from "./core/meal-kits/meal-kits-details/meal-kits-details-ingredients/meal-kits-details-ingredients.component";
import { MealKitsDetailsRecipeComponent } from "./core/meal-kits/meal-kits-details/meal-kits-details-recipe/meal-kits-details-recipe.component";
import { MealKitsDetailsRequiredComponent } from "./core/meal-kits/meal-kits-details/meal-kits-details-required/meal-kits-details-required.component";
import { CartComponent } from "./shared/cart/cart.component";
import { BlogComponent } from './core/blog/blog.component';
import { BlogDetailComponent } from './core/blog/blog-detail/blog-detail.component';
import { ItemCardsComponent } from './core/dashboard/searched-item/item-cards/item-cards.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'search-results', component: ItemCardsComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'cart', component: CartComponent },
  { path: 'master-classes', component: MasterClassesComponent },
  { path: 'master-classes/:id', component: MasterClassesEditComponent },
  {
    path: 'chef/:id', component: ChefDetailsComponent, children: [
      { path: 'meelz', component: ChefDetailsTabMeelzComponent },
      { path: 'recipe', component: ChefDetailsTabRecipeComponent },
      { path: 'chefstore', component: ChefDetailsTabChefstoreComponent },
      { path: 'masterclasses', component: ChefDetailsTabMasterclassesComponent },
      { path: 'cheftable', component: ChefDetailsTabCheftableComponent },
      { path: 'blogposts', component: ChefDetailsTabBlogpostsComponent },
    ]
  },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:id', component: MenuDetailsComponent },
  { path: 'chef-table', component: ChefTableComponent },
  { path: 'chef-table/:id', component: ChefTableDetailsComponent },
  { path: 'meal-kits', component: MealKitsComponent },
  {
    path: 'meal-kits/:id', component: MealKitsDetailsComponent, children: [
      { path: 'ingredients', component: MealKitsDetailsIngredientsComponent },
      { path: 'recipe', component: MealKitsDetailsRecipeComponent },
      { path: 'required', component: MealKitsDetailsRequiredComponent },
    ]
  },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'terms', component: TermsOfUseComponent },
  { path: 'policy', component: PrivacyPolicyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
