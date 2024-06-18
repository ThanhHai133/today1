    <template>
        <v-table class="table" theme="light">
          <div class="addEvents">
          <v-btn @click="dialog = true">Add Event</v-btn>
          <!-- Dialog for adding event -->
          <v-dialog v-model="dialog" max-width="600">  
                 <v-form @submit.prevent="addPost">
                    <v-text-field v-model="newPost.title" label="Event Name" required></v-text-field> 
                    <v-row>
                      <!-- Start Date -->
                      <v-col cols="6">
                        <v-text-field v-model="newPost.startD" label="Start Day" required></v-text-field>
                      </v-col>
                      <!-- Start Month -->
                      <v-col cols="6">
                        <v-text-field v-model="newPost.startM" label="Start Month" required></v-text-field>
                      </v-col>
                    </v-row>
                    
                    <v-row>
                      <!-- End Date -->
                      <v-col cols="6">
                        <v-text-field v-model="newPost.endD" label="End Day" required></v-text-field>
                      </v-col>
                      <!-- End Month -->
                      <v-col cols="6">
                        <v-text-field v-model="newPost.endM" label="End Month" required></v-text-field>
                      </v-col>
                    </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">Cancel</v-btn>
                <v-btn color="primary" type="submit">Save</v-btn>
              </v-card-actions>
            </v-form>
          </v-dialog>
      </div>
          <thead>
            <tr>
                <th class="text-left">
                STT
              </th>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Start 
              </th>
              <th class="text-left">
                End     
              </th>
              <th class="text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="( post, index ) in posts" :key="post.id">
              <td>{{ index }}</td>
              <td>{{ post.title}}</td>
              <td> Day {{ post.startD }} </td>
              <td> Month {{ post.startM }} </td>
              <td class="btn">
                <v-btn class="edit-button" @click="updatePost(post)">Edit</v-btn>
                <v-btn class="delete-button" @click="deletePost(post.id)">Delete</v-btn>
            </td>
            </tr>
          </tbody>
        </v-table>
      </template>
<script setup>
    import { ref } from 'vue';
    import { dialog } from '../stores/counter';
    import { posts,updatePost, deletePost, getPosts, addPost,newPost}  from '../stores/post';
    getPosts();
    
</script>
<style scoped>
    .table{
    width: 200vh;
    overflow: hidden;
    margin: 1rem;
    color: var(--dark-alt);  
    border: 5px solid var(--light);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    }
    .table td {
      font-size: 20px;
    }
    .btn{
      margin-left: 1rem;
    }
    .edit-button {
      background-color: yellow;
    }
    .delete-button {
      background-color: red;
      margin: 1rem
    }
    .addEvents{
    margin-top: 2rem;
    color: white ;
    }

    .v-form{
    background-color: var(--dark);
    color: bisque;
    }
</style>